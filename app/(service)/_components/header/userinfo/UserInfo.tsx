'use client'

import Avatar from 'boring-avatars';
import { useRouter } from 'next/navigation';

import SmallText from '@/components/text/small/SmallText';

type props = {
  username: string
}

export default function UserInfo({ username }: props) {
  const router = useRouter()
  const handleClick = () => {
    console.log('User info clicked')
  }
  return (
    <div className='flex items-center gap-2' onClick={handleClick}>
      <Avatar size='35px' name={username} variant='bauhaus' />
      <SmallText text={username} isBold={false} />
    </div>
  )
}
