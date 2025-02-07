import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface DeleteArticleUsecaseInput extends UsecaseInput {}
interface DeleteArticleUsecaseOutput extends UsecaseOutput {}

export class DeleteArticleUsecase
  implements
    Usecase<DeleteArticleUsecaseInput, Promise<DeleteArticleUsecaseOutput>>
{
  execute(
    input: DeleteArticleUsecaseInput
  ): Promise<DeleteArticleUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
