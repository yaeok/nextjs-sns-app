'use client'

import Link from 'next/link'
import { JSX, useEffect, useRef, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'

import SmallText from '@/components/text/small/SmallText'

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
        <div className='absolute -left-8 top-0 transform -translate-x-1/2 p-4 w-max bg-white border rounded-lg shadow-lg text-sm text-blue-gray-500'>
          <ul className='space-y-2'>
            <li>
              <SmallText text='報告する' isBold={false} />
            </li>
            <li>
              <SmallText text='保存する' isBold={false} />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
