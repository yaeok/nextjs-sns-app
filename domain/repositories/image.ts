/** 記事の画像機能 */
export interface ImageRepository {
  saveArticleImage(args: { articleId: string; image: string }): Promise<string>
}
