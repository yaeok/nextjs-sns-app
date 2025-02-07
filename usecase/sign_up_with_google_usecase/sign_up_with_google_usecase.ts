import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface SignUpWithGoogleUsecaseInput extends UsecaseInput {}
interface SignUpWithGoogleUsecaseOutput extends UsecaseOutput {}

export class SignUpWithGoogleUsecase
  implements
    Usecase<
      SignUpWithGoogleUsecaseInput,
      Promise<SignUpWithGoogleUsecaseOutput>
    >
{
  execute(
    input: SignUpWithGoogleUsecaseInput
  ): Promise<SignUpWithGoogleUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
