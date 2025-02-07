import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface PostArticleUsecaseInput extends UsecaseInput {}
interface PostArticleUsecaseOutput extends UsecaseOutput {}

export class PostArticleUsecase
  implements
    Usecase<PostArticleUsecaseInput, Promise<PostArticleUsecaseOutput>>
{
  execute(input: PostArticleUsecaseInput): Promise<PostArticleUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
