'use client'

import { useState } from 'react'
import { TbPlus } from 'react-icons/tb'

import ArticleModal from '../modal/ArticleModal'

export default function ArticleButton() {
  const [isOpan, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button
        className='bg-primary-500 border-2 border-primary-500 text-white rounded-full aspect-square'
        onClick={openModal}
      >
        <TbPlus size={25} />
      </button>
      <ArticleModal isOpen={isOpan} onClose={closeModal} />
    </>
  )
}
