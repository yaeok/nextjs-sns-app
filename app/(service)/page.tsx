import Image from 'next/image';

import { articles } from '@/data/Article';

import Content from './_components/content/Content';
import ArticleHeader from './_components/header/ArticleHeader';
import Menu from './_components/menu/Menu';

const Page = () => {
  return (
    <section className='w-full min-h-screen'>
      <div className='max-w-screen-md mx-auto px-2 pb-16'>
        {articles.map((article) => (
          <div
            key={article.getId()}
            className='w-full bg-white shadow-lg rounded-lg py-4 my-2 space-y-2'
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
        ))}
      </div>
    </section>
  )
}

export default Page
