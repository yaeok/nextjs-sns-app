import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface SignOutUsecaseInput extends UsecaseInput {}
interface SignOutUsecaseOutput extends UsecaseOutput {}

export class SignOutUsecase
  implements Usecase<SignOutUsecaseInput, Promise<SignOutUsecaseOutput>>
{
  execute(input: SignOutUsecaseInput): Promise<SignOutUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
