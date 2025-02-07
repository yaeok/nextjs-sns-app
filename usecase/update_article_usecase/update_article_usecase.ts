import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface UpdateArticleUsecaseInput extends UsecaseInput {}
interface UpdateArticleUsecaseOutput extends UsecaseOutput {}

export class UpdateArticleUsecase
  implements
    Usecase<UpdateArticleUsecaseInput, Promise<UpdateArticleUsecaseOutput>>
{
  execute(
    input: UpdateArticleUsecaseInput
  ): Promise<UpdateArticleUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
