import Link from 'next/link';

import ArticleButton from './post/button/ArticleButton';

export default function NavBar() {
  return (
    <section className='w-full fixed bottom-0 z-10 bg-white border-t-2'>
      <div className='max-w-screen-lg mx-auto flex justify-center'>
        <div className='w-full max-w-screen-md flex flex-row items-center'>
          <Link href='/' className='flex-1 py-4 text-center'>
            <span className='text-base font-semibold'>投稿一覧</span>
          </Link>
          <ArticleButton />
          <Link href='/' className='flex-1 py-4 text-center'>
            <span className='text-base font-semibold'>マイページ</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
