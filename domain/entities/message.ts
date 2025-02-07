export class Message {
  private id: string
  private message: string
  private username: string
  private articleId: string
  private createdAt: Date

  constructor() {
    this.id = ''
    this.message = ''
    this.username = ''
    this.articleId = ''
    this.createdAt = new Date()
  }

  getId(): string {
    return this.id
  }

  getMessage(): string {
    return this.message
  }

  getUsername(): string {
    return this.username
  }

  getArticleId(): string {
    return this.articleId
  }

  getCreatedAt(): Date {
    return this.createdAt
  }

  setId(id: string): void {
    this.id = id
  }

  setMessage(message: string): void {
    this.message = message
  }

  setUsername(username: string): void {
    this.username = username
  }

  setArticleId(articleId: string): void {
    this.articleId = articleId
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt
  }

  static create(args: {
    id: string
    message: string
    username: string
    articleId: string
    createdAt: Date
  }): Message {
    const message = new Message()
    message.id = args.id
    message.message = args.message
    message.username = args.username
    message.articleId = args.articleId
    message.createdAt = args.createdAt
    return message
  }
}
