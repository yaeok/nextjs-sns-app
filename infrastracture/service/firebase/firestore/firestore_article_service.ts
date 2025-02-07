import { Article } from '@/domain/entities/article';
import { ArticleRepository } from '@/domain/repositories/article';
import { ArticleDB } from '@/infrastracture/data/article';

export class FirestoreArticleService implements ArticleRepository {
  /** データ取得系 */
  findAll(): Promise<Article[]> {
    throw new Error('Method not implemented.')
  }
  findById(args: { id: string }): Promise<ArticleDB> {
    throw new Error('Method not implemented.')
  }
  findByUserId(args: { userId: string }): Promise<ArticleDB[]> {
    throw new Error('Method not implemented.')
  }

  /** データ更新系 */
  post(args: { article: Article }): Promise<ArticleDB> {
    throw new Error('Method not implemented.')
  }
  update(args: { article: Article }): Promise<ArticleDB> {
    throw new Error('Method not implemented.')
  }
  delete(args: { id: string }): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
