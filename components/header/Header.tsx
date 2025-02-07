import LargeText from '../text/large/LargeText';
import PopoverButton from './popover/PopOver';

export default function Header() {
  return (
    <div className='w-full shadow-lg p-4 sticky top-0 bg-white z-10'>
      <div className='max-w-screen-md mx-auto flex justify-between items-center'>
        <LargeText text='BuzzTech' />

        <ul className='hidden md:flex items-center gap-2'>
          <li>Home</li>
          <li>sign in</li>
        </ul>

        <div className='block md:hidden'>
          <PopoverButton currentUser={null} />
        </div>
      </div>
    </div>
  )
}
