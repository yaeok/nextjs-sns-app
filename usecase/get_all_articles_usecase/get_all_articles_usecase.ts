import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase';

interface GetAllArticlesUsecaseInput extends UsecaseInput {}
interface GetAllArticlesUsecaseOutput extends UsecaseOutput {}

export class GetAllArticlesUsecase
  implements
    Usecase<GetAllArticlesUsecaseInput, Promise<GetAllArticlesUsecaseOutput>>
{
  execute(
    input: GetAllArticlesUsecaseInput
  ): Promise<GetAllArticlesUsecaseOutput> {
    throw new Error('Method not implemented.')
  }
}
