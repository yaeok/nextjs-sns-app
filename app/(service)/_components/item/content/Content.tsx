import SmallText from '@/components/text/small/SmallText';

type props = {
  content: string
}

export default function Content({ content }: props) {
  return (
    <div className='w-full px-2 h-10 overflow-hidden'>
      <SmallText text={content} isBold={false} />
    </div>
  )
}
