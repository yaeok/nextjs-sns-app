/** お気に入り機能 */
export interface FavoriteRepository {
  /** 記事に対するお気に入り取得 */
  getNumberOfFavoriteByArticleId(args: { articleId: string }): Promise<number>
  favorite(args: { articleId: string; userId: string }): Promise<void>
}
