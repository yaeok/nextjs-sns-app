import ElevatedButton from '@/components/button/elevated/ElevatedButton';
import BaseModal from '@/components/modal/BaseModal';

type props = {
  isOpen: boolean
  closeModal: () => void
}

export default function DeleteModal({ isOpen, closeModal }: props) {
  const handleDelete = () => {
    closeModal()
  }

  return (
    <>
      <BaseModal isOpen={isOpen} onClose={closeModal} text='削除' width='w-96'>
        <p>本当に削除しますか？</p>
        <div className='flex justify-end gap-4'>
          <ElevatedButton text='削除' onClick={handleDelete} />
        </div>
      </BaseModal>
    </>
  )
}
