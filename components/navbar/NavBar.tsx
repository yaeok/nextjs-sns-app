'use client'

import Link from 'next/link';
import { RiListUnordered, RiUserFill } from 'react-icons/ri';

import { useAuthContext } from '@/providers/CurrentUserProvider';

import ArticleButton from './post/button/ArticleButton';

export default function NavBar() {
  const currentUser = useAuthContext().currentUser
  return (
    <section className='w-full fixed bottom-0 z-10 bg-gray-100'>
      <div className='max-w-screen-lg mx-auto flex justify-center'>
        <div className='py-2 w-full max-w-screen-md flex flex-row justify-around items-center'>
          <Link href='/'>
            <RiListUnordered size={20} />
          </Link>
          <ArticleButton />
          <Link href={`/account/${currentUser?.getId()}`}>
            <RiUserFill size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
