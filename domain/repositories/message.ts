import { MessageDB } from '@/infrastracture/data/message';

import { Message } from '../entities/message';

/** メッセージ機能 */
export interface MessageRepository {
  /** データ取得系 */
  findByArticleId(args: { articleId: string }): Promise<MessageDB[]>
  findByUserId(args: { userId: string }): Promise<MessageDB[]>

  /** データ更新系 */
  post(args: { message: Message }): Promise<MessageDB>
  update(args: { message: Message }): Promise<MessageDB>
  delete(args: { id: string }): Promise<void>
}
