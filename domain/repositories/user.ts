import { UserDB } from '@/infrastracture/data/user';

import { User } from '../entities/user';

/** ユーザ機能 */
export interface UserRepository {
  /** データ取得系 */
  findAll(): Promise<User[]>
  findById(args: { id: string }): Promise<UserDB>

  /** データ更新系 */
  post(args: { user: User }): Promise<UserDB>
  update(args: { user: User }): Promise<UserDB>
  delete(args: { id: string }): Promise<void>
}
