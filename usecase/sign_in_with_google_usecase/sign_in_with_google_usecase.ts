import { User } from '@/domain/entities/user';
import { AuthRepository } from '@/domain/repositories/auth';
import { UserRepository } from '@/domain/repositories/user';
import { SystemErrorException } from '@/infrastracture/exception/SystemErrorException';
import { AuthService } from '@/infrastracture/service/firebase/auth/auth_service';
import {
  FirebaseAuthException
} from '@/infrastracture/service/firebase/exception/FirebaseAuthException';
import {
  FirestoreUserService
} from '@/infrastracture/service/firebase/firestore/firestore_user_service';

import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface SignInWithGoogleUsecaseInput extends UsecaseInput {}
interface SignInWithGoogleUsecaseOutput extends UsecaseOutput {
  result: boolean
}

export class SignInWithGoogleUsecase
  implements
    Usecase<
      SignInWithGoogleUsecaseInput,
      Promise<SignInWithGoogleUsecaseOutput>
    >
{
  private authRepository: AuthRepository
  private userRepository: UserRepository

  constructor() {
    this.authRepository = new AuthService()
    this.userRepository = new FirestoreUserService()
  }

  async execute(): Promise<SignInWithGoogleUsecaseOutput> {
    try {
      // Google認証処理
      const result = await this.authRepository.signInWithGoogle()

      if (!result) {
        // 認証失敗時の処理
        return {
          result: false,
        }
      }

      // ユーザ情報を整形
      const user = new User()
      user.setId(result.user.uid)
      user.setEmail(result.user.email!)
      user.setName(result.user.displayName || '未設定')
      user.setCreatedAt(new Date())

      // ユーザ情報を登録
      const response = await this.userRepository.post({ user })

      if (!response) {
        // ユーザ情報登録失敗時の処理
        return {
          result: false,
        }
      }

      // データを返却
      return {
        result: true,
      }
    } catch (error: any) {
      if (error instanceof FirebaseAuthException) {
        // Firebaseのエラーをハンドリング
        throw new FirebaseAuthException(error.code, error.message)
      } else if (error instanceof Error) {
        // システムエラーをハンドリング
        throw new Error(error.message)
      } else {
        // システムエラーをハンドリング
        throw new SystemErrorException()
      }
    }
  }
}
