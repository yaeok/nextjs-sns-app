import { User } from '@/domain/entities/user';
import { UserRepository } from '@/domain/repositories/user';
import { UserDB } from '@/infrastracture/data/user';
import {
  collection, doc, DocumentData, getDoc, getDocs, query, setDoc, where
} from '@firebase/firestore';

import { db } from '../config/config';

export class FirestoreUserService implements UserRepository {
  private path: string = 'users'

  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.')
  }
  async findById(args: { id: string }): Promise<UserDB> {
    try {
      const { id } = args
      const ref = collection(db, this.path)

      const q = query(ref, where('id', '==', id))

      const snapshots = await getDocs(q)

      if (snapshots.empty) {
        throw new Error('ユーザ情報が存在しません')
      }

      const response: UserDB = this.convertDocumentDataToData(snapshots.docs[0])

      return response
    } catch (error: any) {
      if (error instanceof Error) {
        throw new Error(error.message)
      } else {
        throw new Error('ユーザ情報の取得に失敗しました')
      }
    }
  }
  async post(args: { user: User }): Promise<UserDB> {
    try {
      const { user } = args
      const ref = doc(db, this.path, user.getId())

      const snapshot = await getDoc(ref)
      if (snapshot.exists()) {
        throw new Error('ユーザ情報が既に存在します')
      }

      // データ整形
      const document: DocumentData = this.convertEntityToDocumentData({ user })

      // データ登録
      await setDoc(ref, document)

      // データ整形
      const response: UserDB = this.convertEntityToData({ user })

      // データ返却
      return response
    } catch (error: any) {
      if (error instanceof Error) {
        throw new Error(error.message)
      } else {
        throw new Error('ユーザ情報の登録に失敗しました')
      }
    }
  }

  update(args: { user: User }): Promise<UserDB> {
    throw new Error('Method not implemented.')
  }
  delete(args: { id: string }): Promise<void> {
    throw new Error('Method not implemented.')
  }

  /**
   * DocumentDataをDataに変換
   * @param doc DocumentData
   * @returns UserDB
   */
  private convertDocumentDataToData(doc: any): UserDB {
    const user = new UserDB()
    user.setId(doc.id)
    user.setEmail(doc.data().email)
    user.setName(doc.data().name)
    user.setCreatedAt(doc.data().createdAt)
    user.setUpdatedAt(doc.data().updatedAt)
    user.setDeletedAt(doc.data().deletedAt)
    return user
  }

  /**
   * EntityをDocumentDataに変換
   * @param args.user ユーザ
   * @returns DocumentData
   */
  private convertEntityToDocumentData(args: { user: User }): DocumentData {
    const { user } = args
    return {
      id: user.getId(),
      email: user.getEmail(),
      name: user.getName(),
      createdAt: user.getCreatedAt(),
      updatedAt: new Date(),
      deletedAt: null,
    }
  }

  /**
   * EntityをDataに変換
   * @param args.user ユーザ
   * @returns UserDB
   */
  private convertEntityToData(args: { user: User }): UserDB {
    const { user } = args
    const data = new UserDB()
    data.setId(user.getId())
    data.setEmail(user.getEmail())
    data.setName(user.getName())
    data.setCreatedAt(user.getCreatedAt())
    data.setUpdatedAt(new Date())
    data.setDeletedAt(null)
    return data
  }
}
