export class ArticleDB {
  private id: string
  private title: string
  private content: string
  private userId: string
  private image: string
  private createdAt: Date
  private updatedAt: Date | null
  private deletedAt: Date | null

  constructor() {
    this.id = ''
    this.title = ''
    this.content = ''
    this.userId = ''
    this.image = ''
    this.createdAt = new Date()
    this.updatedAt = null
    this.deletedAt = null
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

  getUserId(): string {
    return this.userId
  }

  getImage(): string {
    return this.image
  }

  getCreatedAt(): Date {
    return this.createdAt
  }

  getUpdatedAt(): Date | null {
    return this.updatedAt
  }

  getDeletedAt(): Date | null {
    return this.deletedAt
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

  setUserId(userId: string): void {
    this.userId = userId
  }

  setImage(image: string): void {
    this.image = image
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt
  }

  setUpdatedAt(updatedAt: Date | null): void {
    this.updatedAt = updatedAt
  }

  setDeletedAt(deletedAt: Date | null): void {
    this.deletedAt = deletedAt
  }

  static create(args: {
    id: string
    title: string
    content: string
    userId: string
    image: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
  }): ArticleDB {
    const articleDB = new ArticleDB()
    articleDB.id = args.id
    articleDB.title = args.title
    articleDB.content = args.content
    articleDB.userId = args.userId
    articleDB.image = args.image
    articleDB.createdAt = args.createdAt
    articleDB.updatedAt = args.updatedAt
    articleDB.deletedAt = args.deletedAt
    return articleDB
  }
}
