import { User, UserCredential } from '@firebase/auth';

/** 認証機能 */
export interface AuthRepository {
  /** 認証処理 */
  /**　Google認証 */
  signInWithGoogle(): Promise<UserCredential | null>
  /** メール認証 */
  signInWithEmail(email: string, password: string): Promise<UserCredential>
  signUpWithEmail(email: string, password: string): Promise<UserCredential>
  signOut(): Promise<void>

  /** メール処理系 */
  sendEmailVerification(): Promise<void>
  sendPasswordResetEmail(email: string): Promise<void>

  /** 最新認証情報取得系 */
  getCurrentUser(): Promise<User>
  checkEmailVerification(): Promise<boolean>
}
