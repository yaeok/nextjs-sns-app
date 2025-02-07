import { FollowDB } from '@/infrastracture/data/follow';

/** フォローフォロワー機能 */
export interface FollowRepository {
  /** データ取得系 */
  getFollowersByUserId(args: { userId: string }): Promise<FollowDB[]>
  getFollowingsByUserId(args: { userId: string }): Promise<FollowDB[]>
  /** フォロー機能 */
  follow(args: { userId: string; followerId: string }): Promise<FollowDB>
  unfollow(args: { userId: string; followerId: string }): Promise<FollowDB>
}
