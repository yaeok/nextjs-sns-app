import MediumText from '@/components/text/medium/MediumText'
import SmallText from '@/components/text/small/SmallText'
import { articles } from '@/data/Article'
import Avatar from 'boring-avatars'
import Image from 'next/image'

export const Page = async ({
  params,
}: {
  params: Promise<{
    id: string
  }>
}) => {
  const id = (await params).id
  return (
    <div className='max-w-screen-md mx-auto pb-16'>
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
      <div className='grid grid-cols-3'>
        {articles.map((article) => (
          <Image
            key={article.getId()}
            src={article.getImage()}
            alt='Article'
            className='w-full object-cover aspect-square'
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  )
}

export default Page
