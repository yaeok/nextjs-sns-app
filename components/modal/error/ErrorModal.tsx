import MediumText from '@/components/text/medium/MediumText';

import BaseModal from '../BaseModal';

type props = {
  isOpen: boolean
  onClose: () => void
  message: string
}

export default function ErrorModal({ isOpen, onClose, message }: props) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      text='エラー'
      width='w-full max-w-md'
    >
      <div className='text-red-500'>
        <MediumText text={message} isBold={true} />
      </div>
    </BaseModal>
  )
}
