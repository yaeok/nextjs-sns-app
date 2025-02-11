import { useState } from 'react';

import ElevatedButton from '@/components/button/elevated/ElevatedButton';

import DeleteModal from '../modal/DeleteModal';

export default function DeleteButton() {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <ElevatedButton text='削除' onClick={openModal} />
      <DeleteModal isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}
