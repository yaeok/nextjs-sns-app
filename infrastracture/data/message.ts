export class MessageDB {
  private id: string
  private message: string
  private userId: string
  private articleId: string
  private createdAt: Date
  private updatedAt: Date | null
  private deletedAt: Date | null

  constructor() {
    this.id = ''
    this.message = ''
    this.userId = ''
    this.articleId = ''
    this.createdAt = new Date()
    this.updatedAt = null
    this.deletedAt = null
  }

  getId(): string {
    return this.id
  }

  getMessage(): string {
    return this.message
  }

  getUserId(): string {
    return this.userId
  }

  getArticleId(): string {
    return this.articleId
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

  setMessage(message: string): void {
    this.message = message
  }

  setUserId(userId: string): void {
    this.userId = userId
  }

  setArticleId(articleId: string): void {
    this.articleId = articleId
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
    message: string
    userId: string
    articleId: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
  }): MessageDB {
    const messageDB = new MessageDB()
    messageDB.id = args.id
    messageDB.message = args.message
    messageDB.userId = args.userId
    messageDB.articleId = args.articleId
    messageDB.createdAt = args.createdAt
    messageDB.updatedAt = args.updatedAt
    messageDB.deletedAt = args.deletedAt
    return messageDB
  }
}
