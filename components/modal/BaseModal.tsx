import { RiCloseCircleFill } from 'react-icons/ri';

import MediumText from '../text/medium/MediumText';

type props = {
  isOpen: boolean
  onClose: () => void
  text: string
  children?: React.ReactNode
  width?: string
}

const BaseModal = ({ isOpen, onClose, text, children, width }: props) => {
  if (isOpen) {
    return (
      <div className='fixed inset-0 max-h-screen z-50'>
        <div className='fixed inset-0 bg-black opacity-50 filter grayscale' />
        <div className='h-screen flex items-center justify-center'>
          <div
            className={`relative p-4 mx-2 bg-white flex flex-col gap-4 rounded-lg shadow-lg ${width}`}
          >
            <div className='w-full flex flex-row justify-between items-center'>
              <MediumText text={text} isBold={false} />
              <button onClick={onClose}>
                <RiCloseCircleFill size={30} />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default BaseModal
