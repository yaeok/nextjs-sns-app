import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface GetUserUsecaseInput extends UsecaseInput {}
interface GetUserUsecaseOutput extends UsecaseOutput {}

export class GetUserUsecase
  implements Usecase<GetUserUsecaseInput, Promise<GetUserUsecaseOutput>>
{
  execute(input: GetUserUsecaseInput): Promise<GetUserUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
