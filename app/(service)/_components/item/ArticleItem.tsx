import Image from 'next/image';

import { Article } from '@/domain/entities/article';

import Content from './content/Content';
import ArticleHeader from './header/ArticleHeader';
import Menu from './menu/Menu';

type props = {
  key: string
  article: Article
}

export default function ArticleItem({ key, article }: props) {
  return (
    <div
      key={key}
      className='w-full bg-white shadow-lg rounded-lg py-2 space-y-2'
    >
      <ArticleHeader
        title={article.getTitle()}
        username={article.getUsername()}
      />
      <div className='w-full'>
        <Image
          src={article.getImage()}
          alt='Article'
          className='w-full object-cover aspect-square'
          width={200}
          height={200}
        />
      </div>
      <Menu favoriteOfNumber={article.getFavoritesCount()} />
      <Content content={article.getContent()} />
    </div>
  )
}
