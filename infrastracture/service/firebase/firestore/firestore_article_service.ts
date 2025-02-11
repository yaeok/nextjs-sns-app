import { Article } from '@/domain/entities/article';
import { ArticleRepository } from '@/domain/repositories/article';
import { ArticleDB } from '@/infrastracture/data/article';
import {
  addDoc, collection, doc, DocumentData, getDocs, query, updateDoc, where
} from '@firebase/firestore';

import { db } from '../config/config';

export class FirestoreArticleService implements ArticleRepository {
  private path = 'articles'

  /** データ取得系 */

  /**
   * findAll 全ての記事情報を取得
   * @returns ArticleDB[]
   */
  async findAll(): Promise<ArticleDB[]> {
    try {
      const ref = collection(db, this.path)

      // データ取得
      const snapshot = await getDocs(ref)

      // データを整形
      const response: ArticleDB[] = snapshot.docs.map((doc: DocumentData) => {
        return this.convertDocumentDataToData(doc)
      })

      // データを返却
      return response
    } catch (error: any) {
      throw new Error('記事の取得に失敗しました')
    }
  }

  /**
   * findById 記事Idから記事情報を取得
   * @param args.id 記事Id
   * @returns ArticleDB
   */
  async findById(args: { id: string }): Promise<ArticleDB> {
    try {
      const ref = collection(db, this.path)

      // クエリ作成
      const q = query(ref, where('id', '==', args.id))

      // データ取得
      const snapshot = await getDocs(q)

      // データを整形
      const response: ArticleDB = this.convertDocumentDataToData(
        snapshot.docs[0]
      )

      // データを返却
      return response
    } catch (error: any) {
      throw new Error('記事の取得に失敗しました')
    }
  }

  /**
   * findByUserId ユーザIdから記事情報を取得
   * @param args.userId ユーザId
   * @returns ArticleDB[]
   */
  async findByUserId(args: { userId: string }): Promise<ArticleDB[]> {
    try {
      const ref = collection(db, this.path)

      // クエリ作成
      const q = query(ref, where('userId', '==', args.userId))

      // データ取得
      const snapshot = await getDocs(q)

      // データを整形
      const response: ArticleDB[] = snapshot.docs.map((doc: DocumentData) => {
        return this.convertDocumentDataToData(doc)
      })

      // データを返却
      return response
    } catch (error: any) {
      throw new Error('記事の取得に失敗しました')
    }
  }

  /** データ更新系 */
  /**
   * post 記事を記事
   * @param args.article 記事
   * @param args.userId ユーザId
   * @returns ArticleDB
   */
  async post(args: { article: Article; userId: string }): Promise<ArticleDB> {
    try {
      const { article, userId } = args
      const ref = collection(db, this.path)

      // データ整形
      const document: DocumentData = this.convertEntityToDocumentData({
        article: args.article,
        userId: userId,
      })

      // データ登録
      const docRef = await addDoc(ref, document)

      // データを取得
      await updateDoc(docRef, { id: docRef.id })

      // idを格納
      article.setId(docRef.id)

      // データを整形
      const resopnse: ArticleDB = this.convertEntityToData({
        article: article,
        userId: userId,
      })

      // データを返却
      return resopnse
    } catch (error: any) {
      throw new Error('記事の記事に失敗しました')
    }
  }

  /**
   * update 記事を更新
   * @param args.article 記事
   * @returns ArticleDB
   */
  async update(args: { article: Article }): Promise<ArticleDB> {
    try {
      const { article } = args
      const ref = doc(db, this.path, article.getId())

      // データ整形
      const document: DocumentData = this.convertEntityToDocumentData({
        article: article,
      })

      // データ更新
      await updateDoc(ref, document)

      // データを整形
      const response: ArticleDB = this.convertEntityToData({
        article: article,
      })

      // データを返却
      return response
    } catch (error: any) {
      throw new Error('記事の更新に失敗しました')
    }
  }

  /**
   * delete 記事を削除
   * @param args.id 記事Id
   * @returns void
   */
  async delete(args: { id: string }): Promise<void> {
    try {
      const ref = doc(db, this.path, args.id)

      // データ削除
      await updateDoc(ref, { deletedAt: new Date() })
    } catch (error: any) {
      throw new Error('記事の削除に失敗しました')
    }
  }

  /**
   * DocumentDataをDataに変換
   * @param doc DocumentData
   * @returns ArticleDB
   */
  private convertDocumentDataToData(doc: DocumentData): ArticleDB {
    const article = new ArticleDB()
    article.setId(doc.id)
    article.setTitle(doc.data().title)
    article.setContent(doc.data().content)
    article.setUserId(doc.data().userId)
    article.setImage(doc.data().image)
    article.setCreatedAt(doc.data().createdAt)
    article.setUpdatedAt(doc.data().updatedAt)
    article.setDeletedAt(doc.data().deletedAt)
    return article
  }

  /**
   * EntityをDocumentDataに変換
   * @param args.article 記事
   * @param args.userId ユーザID
   * @returns DocumentData
   */
  private convertEntityToDocumentData(args: {
    article: Article
    userId?: string
  }): DocumentData {
    const { article, userId } = args

    if (!userId) {
      // ユーザIDがない場合（更新）
      return {
        title: article.getTitle(),
        content: article.getContent(),
        image: article.getImage(),
        createdAt: article.getCreatedAt(),
        updatedAt: article.getUpdatedAt(),
      }
    } else {
      // ユーザIDがある場合（新規）
      return {
        title: article.getTitle(),
        content: article.getContent(),
        userId: userId,
        image: article.getImage(),
        createdAt: article.getCreatedAt(),
        updatedAt: article.getUpdatedAt(),
      }
    }
  }

  /**
   * EntityをDataに変換
   * @param args.article 記事
   * @param args.userId ユーザID
   * @returns ArticleDB
   */
  private convertEntityToData(args: {
    article: Article
    userId?: string
  }): ArticleDB {
    const { article, userId } = args
    const data = new ArticleDB()
    data.setTitle(article.getTitle())
    data.setContent(article.getContent())
    data.setImage(article.getImage())
    if (userId) {
      data.setUserId(userId)
    }
    data.setCreatedAt(article.getCreatedAt())
    data.setUpdatedAt(article.getUpdatedAt())
    return data
  }
}
