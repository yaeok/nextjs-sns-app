'use client'

import LargeText from '@/components/text/large/LargeText'
import SmallText from '@/components/text/small/SmallText'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
      <LargeText text='Not Found Page' isBold={true} />
      <SmallText text='ページが見つかりませんでした。' isBold={false} />
      <div className='px-4 py-2 bg-green-500 text-white rounded-md font-semibold'>
        <Link href='/'>ホームへ</Link>
      </div>
    </div>
  )
}
