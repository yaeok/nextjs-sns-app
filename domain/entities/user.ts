export class User {
  private id: string
  private name: string
  private email: string
  private followers: string[]
  private followings: string[]
  private createdAt: Date

  constructor() {
    this.id = ''
    this.name = ''
    this.email = ''
    this.followers = []
    this.followings = []
    this.createdAt = new Date()
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

  getFollowers(): string[] {
    return this.followers
  }

  getFollowings(): string[] {
    return this.followings
  }

  getCreatedAt(): Date {
    return this.createdAt
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

  setFollowers(followers: string[]): void {
    this.followers = followers
  }

  setFollowings(followings: string[]): void {
    this.followings = followings
  }

  /**
   * ユーザー作成
   * @param args.id ユーザーID
   * @param args.name ユーザー名
   * @param args.email メールアドレス
   * @param args.followers フォロワーのユーザーID
   * @param args.followings フォローしているユーザーID
   * @param args.createdAt 作成日
   * @returns User
   */
  static create(args: {
    id: string
    name: string
    email: string
    followers: string[]
    followings: string[]
    createdAt: Date
  }): User {
    const user = new User()
    user.id = args.id
    user.name = args.name
    user.email = args.email
    user.followers = args.followers
    user.followings = args.followings
    user.createdAt = args.createdAt
    return user
  }

  /**
   * フォロー
   * @param user フォローするユーザー
   * @param followerId フォローするユーザーのID
   * @returns User
   */
  static follow(user: User, followerId: string): User {
    user.followers.push(followerId)
    return user
  }

  /**
   * フォロー解除
   * @param user フォロー解除するユーザー
   * @param followerId フォロー解除するユーザーのID
   * @returns User
   */
  static unfollow(user: User, followerId: string): User {
    user.followers = user.followers.filter((id) => id !== followerId)
    return user
  }
}
