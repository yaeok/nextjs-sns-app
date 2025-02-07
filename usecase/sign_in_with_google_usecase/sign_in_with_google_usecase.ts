import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface SignInWithGoogleUsecaseInput extends UsecaseInput {}
interface SignInWithGoogleUsecaseOutput extends UsecaseOutput {}

export class SignInWithGoogleUsecase
  implements
    Usecase<
      SignInWithGoogleUsecaseInput,
      Promise<SignInWithGoogleUsecaseOutput>
    >
{
  execute(
    input: SignInWithGoogleUsecaseInput
  ): Promise<SignInWithGoogleUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
