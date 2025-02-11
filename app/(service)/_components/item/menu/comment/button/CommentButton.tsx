import { useState } from 'react'
import { FaRegComment } from 'react-icons/fa6'

import CommentModal from '../modal/CommentModal'

export default function CommentButton() {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <button onClick={openModal} className='rounded-full'>
        <FaRegComment />
      </button>
      <CommentModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
