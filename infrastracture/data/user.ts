export class UserDB {
  private id: string
  private name: string
  private email: string
  private createdAt: Date
  private updatedAt: Date | null
  private deletedAt: Date | null

  constructor() {
    this.id = ''
    this.name = ''
    this.email = ''
    this.createdAt = new Date()
    this.updatedAt = null
    this.deletedAt = null
  }

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getEmail(): string {
    return this.email
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

  setName(name: string): void {
    this.name = name
  }

  setEmail(email: string): void {
    this.email = email
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
    name: string
    email: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
  }): UserDB {
    const userDB = new UserDB()
    userDB.id = args.id
    userDB.name = args.name
    userDB.email = args.email
    userDB.createdAt = args.createdAt
    userDB.updatedAt = args.updatedAt
    userDB.deletedAt = args.deletedAt
    return userDB
  }
}
