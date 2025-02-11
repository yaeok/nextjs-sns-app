import { ArticleDB } from '@/infrastracture/data/article';

export class Article {
  private id: string
  private title: string
  private content: string
  private username: string
  private image: string
  private favoritesCount: number
  private createdAt: Date
  private updatedAt: Date | null

  constructor() {
    this.id = ''
    this.title = ''
    this.content = ''
    this.username = ''
    this.image = ''
    this.favoritesCount = 0
    this.createdAt = new Date()
    this.updatedAt = null
  }

  getId(): string {
    return this.id
  }

  getTitle(): string {
    return this.title
  }

  getContent(): string {
    return this.content
  }

  getUsername(): string {
    return this.username
  }

  getImage(): string {
    return this.image
  }

  getFavoritesCount(): number {
    return this.favoritesCount
  }

  getCreatedAt(): Date {
    return this.createdAt
  }

  getUpdatedAt(): Date | null {
    return this.updatedAt
  }

  setId(id: string): void {
    this.id = id
  }

  setTitle(title: string): void {
    this.title = title
  }

  setContent(content: string): void {
    this.content = content
  }

  setUsername(username: string): void {
    this.username = username
  }

  setImage(image: string): void {
    this.image = image
  }

  setFavoritesCount(favoritesCount: number): void {
    this.favoritesCount = favoritesCount
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt
  }

  setUpdatedAt(updatedAt: Date | null): void {
    this.updatedAt = updatedAt
  }

  static create(args: {
    id: string
    title: string
    content: string
    username: string
    image: string
    favoritesCount: number
    createdAt: Date
    updatedAt: Date | null
  }): Article {
    const article = new Article()
    article.id = args.id
    article.title = args.title
    article.content = args.content
    article.username = args.username
    article.image = args.image
    article.favoritesCount = args.favoritesCount
    article.createdAt = args.createdAt
    article.updatedAt = args.updatedAt
    return article
  }

  static convertDataToEntity(args: {
    data: ArticleDB
    username: string
    favoritesCount: number
  }): Article {
    const { data, username, favoritesCount } = args
    return Article.create({
      id: data.getId(),
      title: data.getTitle(),
      content: data.getContent(),
      username: username,
      image: data.getImage(),
      favoritesCount: favoritesCount,
      createdAt: data.getCreatedAt(),
      updatedAt: data.getUpdatedAt() ? data.getUpdatedAt() : null,
    })
  }
}
