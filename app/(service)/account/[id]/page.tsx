import Avatar from 'boring-avatars'

import MediumText from '@/components/text/medium/MediumText'
import SmallText from '@/components/text/small/SmallText'
import { articles } from '@/data/Article'

import ArticleGrid from './_components/grid/ArticleGrid'

export const Page = async ({
  params,
}: {
  params: Promise<{
    id: string
  }>
}) => {
  const id = (await params).id
  return (
    <div className='max-w-screen-md mx-auto pb-12'>
      <div className='flex items-center gap-4 p-4'>
        <Avatar size='85px' name={id} variant='bauhaus' />
        <div className='flex flex-col gap-2'>
          <div>
            <MediumText text={id} isBold={true} />
          </div>
          <div className='flex gap-4'>
            <div className='flex flex-col'>
              <SmallText text='0' isBold={false} />
              <SmallText text='投稿' isBold={true} />
            </div>
            <div className='flex flex-col'>
              <SmallText text='0' isBold={false} />
              <SmallText text='フォロー' isBold={true} />
            </div>
            <div className='flex flex-col'>
              <SmallText text='0' isBold={false} />
              <SmallText text='フォロワー' isBold={true} />
            </div>
          </div>
        </div>
      </div>
      <div className='p-4'>
        <button>プロフィール編集</button>
      </div>
      <ArticleGrid articles={articles} />
    </div>
  )
}

export default Page
