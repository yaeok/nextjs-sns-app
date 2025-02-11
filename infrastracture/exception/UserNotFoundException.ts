// 認証情報がみつからない場合の例外
export class UserNotFoundException extends Error {
  constructor(message?: string) {
    super(message || '認証情報がありません')
    this.name = 'UserNotFoundException'
  }
}
