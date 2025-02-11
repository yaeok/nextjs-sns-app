import { Article } from '@/domain/entities/article'
import { ArticleRepository } from '@/domain/repositories/article'
import { FirestoreArticleService } from '@/infrastracture/service/firebase/firestore/firestore_article_service'

import { Usecase, UsecaseInput, UsecaseOutput } from '../usecase'

interface PostArticleUsecaseInput extends UsecaseInput {
  title: string
  content: string
}

interface PostArticleUsecaseOutput extends UsecaseOutput {
  article: Article
}

export class PostArticleUsecase
  implements
    Usecase<PostArticleUsecaseInput, Promise<PostArticleUsecaseOutput>>
{
  private articleRepository: ArticleRepository

  constructor() {
    this.articleRepository = new FirestoreArticleService()
  }

  async execute(
    input: PostArticleUsecaseInput
  ): Promise<PostArticleUsecaseOutput> {
    const { title, content } = input

    const today = new Date()

    const article = new Article()
    article.setTitle(title)
    article.setContent(content)
    article.setCreatedAt(today)

    const uid = 'dummy'

    const result = await this.articleRepository.post({
      article: article,
      userId: uid,
    })

    const response = Article.convertDataToEntity({
      data: result,
      username: 'dummy',
      favoritesCount: 0,
    })

    return { article: response }
  }
}
