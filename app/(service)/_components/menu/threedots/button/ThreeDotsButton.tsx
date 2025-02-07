import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';

import MenuPopOver from '../popover/MenuPopOver';

export default function ThreeDotsButton() {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <BsThreeDots />
      <MenuPopOver isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
