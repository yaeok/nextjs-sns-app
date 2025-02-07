import { User } from '@/domain/entities/user';
import { UserRepository } from '@/domain/repositories/user';
import { UserDB } from '@/infrastracture/data/user';

export class FirestoreUserService implements UserRepository {
  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.')
  }
  findById(args: { id: string }): Promise<UserDB> {
    throw new Error('Method not implemented.')
  }
  post(args: { user: User }): Promise<UserDB> {
    throw new Error('Method not implemented.')
  }
  update(args: { user: User }): Promise<UserDB> {
    throw new Error('Method not implemented.')
  }
  delete(args: { id: string }): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
