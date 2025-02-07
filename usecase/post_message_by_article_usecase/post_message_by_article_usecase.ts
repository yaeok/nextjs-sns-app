import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface PostMessageByArticleUsecaseInput extends UsecaseInput {}
interface PostMessageByArticleUsecaseOutput extends UsecaseOutput {}

export class PostMessageByArticleUsecase
  implements
    Usecase<
      PostMessageByArticleUsecaseInput,
      Promise<PostMessageByArticleUsecaseOutput>
    >
{
  execute(
    input: PostMessageByArticleUsecaseInput
  ): Promise<PostMessageByArticleUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
