'use client'

import Link from 'next/link'
import { JSX, useEffect, useRef, useState } from 'react'

import { BsThreeDots } from 'react-icons/bs'

export default function ThreeDotsPopover(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const popoverRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        closeModal()
      }
    }
    function handleScroll(): void {
      closeModal()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='relative inline-block' ref={popoverRef}>
      <button
        onClick={isOpen ? closeModal : openModal}
        className='rounded-full'
      >
        <BsThreeDots />
      </button>
      {isOpen && (
        <div className='absolute -left-16 top-6 transform -translate-x-1/2 p-6 w-max bg-white border rounded-lg shadow-lg text-sm text-blue-gray-500'>
          <ul className='space-y-6'>
            <li>
              <Link
                href='/sign_in'
                className='px-6 py-2 text-sm bg-green-500 rounded-full shadow-md text-white font-semibold'
              >
                ログイン
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
