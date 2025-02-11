import Image from 'next/image';

import { Article } from '@/domain/entities/article';

type props = {
  key: string
  article: Article
}

export default function ArticleGridItem({ key, article }: props) {
  return (
    <button>
      <Image
        key={key}
        src={article.getImage()}
        alt={article.getTitle()}
        className='w-full object-cover aspect-square'
        width={200}
        height={200}
      />
    </button>
  )
}
