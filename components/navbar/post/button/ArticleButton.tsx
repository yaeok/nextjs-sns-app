'use client'

import { useState } from 'react';

import ArticleModal from '../modal/ArticleModal';

export default function ArticleButton() {
  const [isOpan, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button
        className='bg-primary-500 border-2 border-primary-500 text-white rounded-full aspect-square p-2 text-base font-semibold'
        onClick={openModal}
      >
        投稿
      </button>
      <ArticleModal isOpen={isOpan} onClose={closeModal} />
    </>
  )
}
