'use client'

import SmallText from '@/components/text/small/SmallText'

import CommentButton from './comment/button/CommentButton'
import FavoriteButton from './favorite/button/FavoriteButton'
import ThreeDotsPopover from './threedots/popover/ThreeDotsPopover'

type props = {
  favoriteOfNumber: number
}

export default function Menu({ favoriteOfNumber }: props) {
  return (
    <div className='w-full flex items-center px-2'>
      <div className='flex-1 flex items-center gap-2'>
        <FavoriteButton />
        <SmallText text={favoriteOfNumber.toString()} isBold={true} />
        <CommentButton />
      </div>
      <ThreeDotsPopover />
    </div>
  )
}
