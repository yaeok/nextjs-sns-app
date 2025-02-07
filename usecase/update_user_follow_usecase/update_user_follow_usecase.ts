import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface UpdateUserFollowUsecaseInput extends UsecaseInput {}
interface UpdateUserFollowUsecaseOutput extends UsecaseOutput {}

export class UpdateUserFollowUsecase
  implements
    Usecase<
      UpdateUserFollowUsecaseInput,
      Promise<UpdateUserFollowUsecaseOutput>
    >
{
  execute(
    input: UpdateUserFollowUsecaseInput
  ): Promise<UpdateUserFollowUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
