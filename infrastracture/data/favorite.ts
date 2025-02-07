export class FavoriteDB {
  private id: string
  private aritcleId: string
  private userId: string

  constructor() {
    this.id = ''
    this.aritcleId = ''
    this.userId = ''
  }

  getId(): string {
    return this.id
  }

  getArticleId(): string {
    return this.aritcleId
  }

  getUserId(): string {
    return this.userId
  }

  setId(id: string): void {
    this.id = id
  }

  setArticleId(articleId: string): void {
    this.aritcleId = articleId
  }

  setUserId(userId: string): void {
    this.userId = userId
  }

  static filterByArticleId(favorites: FavoriteDB[], articleId: string): number {
    const countOfNumber: number = favorites.filter(
      (favorite) => favorite.getArticleId() === articleId
    ).length

    return countOfNumber
  }
}
