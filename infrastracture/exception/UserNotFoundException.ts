export class UserNotFoundException extends Error {
  constructor(message?: string) {
    super(message || '認証情報がありません')
    this.name = 'UserNotFoundException'
  }
}
