import { ImageRepository } from '@/domain/repositories/image';

export class StorageArticleImageService implements ImageRepository {
  async saveArticleImage(args: {
    articleId: string
    image: string
  }): Promise<string> {
    // const storageRef = ref(storage, 'article_images/' + args.image)
    // await uploadString(storageRef, args.image, 'data_url')
    // return getDownloadURL(storageRef)
    return ''
  }
}
