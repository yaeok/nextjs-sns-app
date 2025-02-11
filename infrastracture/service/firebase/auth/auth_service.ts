import { AuthRepository } from '@/domain/repositories/auth'
import { SystemErrorException } from '@/infrastracture/exception/SystemErrorException'
import { UserNotFoundException } from '@/infrastracture/exception/UserNotFoundException'
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
  UserCredential,
} from '@firebase/auth'

import { auth, googleAuth } from '../config/config'
import { FirebaseAuthException } from '../exception/FirebaseAuthException'
import { isFirebaseError } from '../exception/types/FirebaseErrorType'

export class AuthService implements AuthRepository {
  /** 認証処理 */
  /**
   * Google認証
   * @returns　ユーザ情報
   */
  async signInWithGoogle(): Promise<UserCredential | null> {
    try {
      // Google認証を行う
      const result = await signInWithPopup(auth, googleAuth)

      // ユーザ情報を返却
      return result
    } catch (error: any) {
      if (isFirebaseError(error)) {
        const { message, code } = this.handleFirebaseAuthError(error)
        // Firebaseのエラーをハンドリング

        if (code === 'auth/popup-closed-by-user') {
          return null
        }
        throw new FirebaseAuthException(code, message)
      } else {
        throw new SystemErrorException()
      }
    }
  }

  /**
   * メールサインイン
   * @param email メールアドレス
   * @param password パスワード
   * @returns ユーザ情報
   */
  async signInWithEmail(
    email: string,
    password: string
  ): Promise<UserCredential> {
    try {
      // メール認証を行う
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (!userCredential.user) {
        // ユーザが存在しない場合はエラーを返却
        throw new UserNotFoundException('ユーザが存在しません')
      }

      // ユーザ情報を返却
      return userCredential
    } catch (error: any) {
      if (isFirebaseError(error)) {
        const { message, code } = this.handleFirebaseAuthError(error)
        // Firebaseのエラーをハンドリング
        throw new FirebaseAuthException(code, message)
      } else {
        throw new SystemErrorException()
      }
    }
  }

  /**
   * メールサインアップ
   * @param email
   * @param password
   * @returns
   */
  async signUpWithEmail(
    email: string,
    password: string
  ): Promise<UserCredential> {
    try {
      // メール認証を行う
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        // メール認証を送信
        await this.sendEmailVerification()
      } else {
        // ユーザが存在しない場合はエラーを返却
        throw new UserNotFoundException('ユーザが存在しません')
      }

      // ユーザ情報を返却
      return userCredential
    } catch (error: any) {
      if (isFirebaseError(error)) {
        const { message, code } = this.handleFirebaseAuthError(error)
        // Firebaseのエラーをハンドリング
        throw new FirebaseAuthException(code, message)
      } else {
        throw new SystemErrorException()
      }
    }
  }

  /**
   * ログアウト
   */
  async signOut(): Promise<void> {
    try {
      // ログアウト
      await auth.signOut()
    } catch (error: any) {
      if (isFirebaseError(error)) {
        const { message, code } = this.handleFirebaseAuthError(error)
        // Firebaseのエラーをハンドリング
        throw new FirebaseAuthException(code, message)
      } else {
        throw new SystemErrorException()
      }
    }
  }

  /** メール処理系 */
  /**
   * メール認証送信
   */
  async sendEmailVerification(): Promise<void> {
    try {
      // 現在のユーザを取得
      const currentUser = await this.getCurrentUser()

      // メール認証を送信
      await sendEmailVerification(currentUser)
    } catch (error: any) {
      if (isFirebaseError(error)) {
        const { message, code } = this.handleFirebaseAuthError(error)
        // Firebaseのエラーをハンドリング
        throw new FirebaseAuthException(code, message)
      } else {
        throw new SystemErrorException()
      }
    }
  }

  /**
   * パスワードリセットメール送信
   * @param email メールアドレス
   */
  async sendPasswordResetEmail(email: string): Promise<void> {
    try {
      // パスワードリセットメールを送信
      await this.sendPasswordResetEmail(email)
    } catch (error: any) {
      if (isFirebaseError(error)) {
        const { message, code } = this.handleFirebaseAuthError(error)
        // Firebaseのエラーをハンドリング
        throw new FirebaseAuthException(code, message)
      } else {
        throw new SystemErrorException()
      }
    }
  }

  /** 最新認証情報取得系 */
  /**
   * 最新のユーザ情報を取得
   * @returns ユーザ情報
   */
  async getCurrentUser(): Promise<User> {
    try {
      // 現在のユーザを取得
      const currentUser = auth.currentUser

      if (!currentUser) {
        // ユーザが存在しない場合はエラーを返却
        throw new UserNotFoundException()
      }

      // ユーザ情報を最新化
      await currentUser.reload()

      // ユーザ情報を返却
      return currentUser
    } catch (error: any) {
      if (isFirebaseError(error)) {
        const { message, code } = this.handleFirebaseAuthError(error)
        // Firebaseのエラーをハンドリング
        throw new FirebaseAuthException(code, message)
      } else {
        throw new SystemErrorException()
      }
    }
  }

  /**
   * メール認証が完了しているか確認
   * @returns 認証状態
   */
  async checkEmailVerification(): Promise<boolean> {
    try {
      // 現在のユーザを取得
      const currentUser = await this.getCurrentUser()

      // メール認証が完了しているか確認
      return currentUser.emailVerified
    } catch (error: any) {
      if (isFirebaseError(error)) {
        const { message, code } = this.handleFirebaseAuthError(error)
        // Firebaseのエラーをハンドリング
        throw new FirebaseAuthException(code, message)
      } else {
        throw new SystemErrorException()
      }
    }
  }

  /**
   * Firebaseのエラーハンドリングを行う
   * @param error エラーオブジェクト
   */
  private handleFirebaseAuthError(error: any): {
    message: string
    code: string
  } {
    let message

    if (error.code === 'auth/popup-closed-by-user') {
      return {
        message: 'Google認証がキャンセルされました',
        code: error.code,
      }
    }
    switch (error.code) {
      case 'auth/user-not-found':
        message = '認証情報が見つかりません'
        break
      case 'auth/wrong-password':
        message = 'パスワードが違います'
        break
      case 'auth/user-disabled':
        message = '無効なアカウントです'
        break
      case 'auth/too-many-requests':
        message = '試行回数が上限に達しました'
        break
      case 'auth/invalid-email':
        message = '無効なメールアドレスです'
        break
      case 'auth/email-already-in-use':
        message = '既に登録されたメールアドレスです'
        break
      default:
        message = 'ログインに失敗しました'
        break
    }
    return {
      message,
      code: error.code,
    }
  }
}
