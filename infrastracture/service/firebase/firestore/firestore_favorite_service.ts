import { FavoriteRepository } from '@/domain/repositories/favorite';

export class FirestoreFavoriteService implements FavoriteRepository {
  getNumberOfFavoriteByArticleId(args: { articleId: string }): Promise<number> {
    throw new Error('Method not implemented.')
  }
  favorite(args: { articleId: string; userId: string }): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
