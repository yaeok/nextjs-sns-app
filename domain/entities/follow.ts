export class Follow {
  private id: string
  private followerId: string
  private followingId: string
  private createdAt: Date

  constructor() {
    this.id = ''
    this.followerId = ''
    this.followingId = ''
    this.createdAt = new Date()
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

  static create(args: {
    id: string
    followerId: string
    followingId: string
    createdAt: Date
  }): Follow {
    const follow = new Follow()
    follow.id = args.id
    follow.followerId = args.followerId
    follow.followingId = args.followingId
    follow.createdAt = args.createdAt
    return follow
  }
}
