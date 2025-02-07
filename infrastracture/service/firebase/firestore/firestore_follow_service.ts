import { Follow } from '@/domain/entities/follow';
import { FollowRepository } from '@/domain/repositories/follow';
import { FollowDB } from '@/infrastracture/data/follow';

export class FirestoreFollowService implements FollowRepository {
  getFollowersByUserId(args: { userId: string }): Promise<FollowDB[]> {
    throw new Error('Method not implemented.')
  }
  getFollowingsByUserId(args: { userId: string }): Promise<FollowDB[]> {
    throw new Error('Method not implemented.')
  }

  /** フォロー機能 */

  /**
   * フォローする
   * @param args.userId 自分のid
   * @param args.followerId フォローする相手のid
   * @returns フォロー情報
   */
  follow(args: { userId: string; followerId: string }): Promise<FollowDB> {
    throw new Error('Method not implemented.')
  }

  /**
   * フォロー解除する
   * @param args.userId 自分のid
   * @param args.followerId フォロー解除する相手のid
   * @returns フォロー情報
   */
  unfollow(args: { userId: string; followerId: string }): Promise<FollowDB> {
    throw new Error('Method not implemented.')
  }
}
