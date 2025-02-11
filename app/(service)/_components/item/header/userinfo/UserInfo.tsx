'use client'

import Avatar from 'boring-avatars'
import { useRouter } from 'next/navigation'

import SmallText from '@/components/text/small/SmallText'

type props = {
  username: string
}

export default function UserInfo({ username }: props) {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/account/${username}`)
  }
  return (
    <div
      className='flex items-center gap-2 cursor-pointer'
      onClick={handleClick}
    >
      <Avatar size='35px' name={username} variant='bauhaus' />
      <SmallText text={username} isBold={false} />
    </div>
  )
}
