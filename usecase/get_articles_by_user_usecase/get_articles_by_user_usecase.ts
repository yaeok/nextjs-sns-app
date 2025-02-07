import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface GetArticlesByUserUsecaseInput extends UsecaseInput {}
interface GetArticlesByUserUsecaseOutput extends UsecaseOutput {}

export class GetArticlesByUserUsecase
  implements
    Usecase<
      GetArticlesByUserUsecaseInput,
      Promise<GetArticlesByUserUsecaseOutput>
    >
{
  execute(
    input: GetArticlesByUserUsecaseInput
  ): Promise<GetArticlesByUserUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
