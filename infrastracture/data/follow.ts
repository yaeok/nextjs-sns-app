export class FollowDB {
  private id: string
  private followerId: string
  private followingId: string
  private createdAt: Date
  private updatedAt: Date | null
  private deletedAt: Date | null

  constructor() {
    this.id = ''
    this.followerId = ''
    this.followingId = ''
    this.createdAt = new Date()
    this.updatedAt = null
    this.deletedAt = null
  }

  getId(): string {
    return this.id
  }

  getFollowerId(): string {
    return this.followerId
  }

  getFollowingId(): string {
    return this.followingId
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

  setFollowerId(followerId: string): void {
    this.followerId = followerId
  }

  setFollowingId(followingId: string): void {
    this.followingId = followingId
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
    followerId: string
    followingId: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
  }): FollowDB {
    const followDB = new FollowDB()
    followDB.id = args.id
    followDB.followerId = args.followerId
    followDB.followingId = args.followingId
    followDB.createdAt = args.createdAt
    followDB.updatedAt = args.updatedAt
    followDB.deletedAt = args.deletedAt
    return followDB
  }
}
