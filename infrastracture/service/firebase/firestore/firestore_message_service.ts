import { Message } from '@/domain/entities/message';
import { MessageRepository } from '@/domain/repositories/message';
import { MessageDB } from '@/infrastracture/data/message';

export class FirestoreMessageService implements MessageRepository {
  findByArticleId(args: { articleId: string }): Promise<MessageDB[]> {
    throw new Error('Method not implemented.')
  }
  findByUserId(args: { userId: string }): Promise<MessageDB[]> {
    throw new Error('Method not implemented.')
  }
  post(args: { message: Message }): Promise<MessageDB> {
    throw new Error('Method not implemented.')
  }
  update(args: { message: Message }): Promise<MessageDB> {
    throw new Error('Method not implemented.')
  }
  delete(args: { id: string }): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
