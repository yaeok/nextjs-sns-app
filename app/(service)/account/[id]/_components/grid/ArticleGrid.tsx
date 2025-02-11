import { Article } from '@/domain/entities/article';

import ArticleGridItem from './item/ArticleGridItem';

type props = {
  articles: Article[]
}

export default function ArticleGrid({ articles }: props) {
  return (
    <div className='grid grid-cols-3'>
      {articles.map((article) => (
        <ArticleGridItem key={article.getId()} article={article} />
      ))}
    </div>
  )
}
