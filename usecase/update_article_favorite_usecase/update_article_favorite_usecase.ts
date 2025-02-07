import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface UpdateArticleFavoriteUsecaseInput extends UsecaseInput {}
interface UpdateArticleFavoriteUsecaseOutput extends UsecaseOutput {}

export class UpdateArticleFavoriteUsecase
  implements
    Usecase<
      UpdateArticleFavoriteUsecaseInput,
      Promise<UpdateArticleFavoriteUsecaseOutput>
    >
{
  execute(
    input: UpdateArticleFavoriteUsecaseInput
  ): Promise<UpdateArticleFavoriteUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
