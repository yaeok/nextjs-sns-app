'use client'

import LargeText from '@/components/text/large/LargeText';

const Page = () => {
  return (
    <section className='w-full min-h-screen'>
      <div className='w-full shadow-lg p-4'>
        <div className='w-full flex justify-between items-center'>
          <LargeText text='BuzzTech' />
          <ul className='flex items-center gap-2'>
            <li>Home</li>
            <li>sign in</li>
          </ul>
        </div>
      </div>
      <div className='max-w-screen-lg mx-auto'>
        <div></div>
      </div>
    </section>
  )
}

export default Page
