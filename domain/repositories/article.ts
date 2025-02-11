import { ArticleDB } from '@/infrastracture/data/article';

import { Article } from '../entities/article';

/** 記事機能 */
export interface ArticleRepository {
  /** データ取得系 */
  findAll(): Promise<ArticleDB[]>
  findById(args: { id: string }): Promise<ArticleDB>
  findByUserId(args: { userId: string }): Promise<ArticleDB[]>

  /** データ更新系 */
  post(args: { article: Article; userId: string }): Promise<ArticleDB>
  update(args: { article: Article }): Promise<ArticleDB>
  delete(args: { id: string }): Promise<void>
}
