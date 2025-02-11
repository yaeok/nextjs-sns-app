import { articles } from '@/data/Article';

import ArticleItem from './_components/item/ArticleItem';

const Page = () => {
  return (
    <section className='w-full min-h-screen'>
      <div className='max-w-screen-md mx-auto px-2 pb-14 space-y-2'>
        {articles.map((article) => (
          <ArticleItem key={article.getId()} article={article} />
        ))}
      </div>
    </section>
  )
}

export default Page
