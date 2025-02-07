import MediumText from '@/components/text/medium/MediumText';

import UserInfo from './userinfo/UserInfo';

type props = {
  title: string
  username: string
}

export default function ArticleHeader({ title, username }: props) {
  return (
    <div className='w-full px-2 flex justify-between items-center'>
      <MediumText text={title} />
      <UserInfo username={username} />
    </div>
  )
}
