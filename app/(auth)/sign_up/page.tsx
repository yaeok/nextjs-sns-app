'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

import ErrorModal from '@/components/modal/error/ErrorModal';
import MediumText from '@/components/text/medium/MediumText';
import SmallText from '@/components/text/small/SmallText';
import { SystemErrorException } from '@/infrastracture/exception/SystemErrorException';
import {
  FirebaseAuthException
} from '@/infrastracture/service/firebase/exception/FirebaseAuthException';
import {
  SignInWithGoogleUsecase
} from '@/usecase/sign_in_with_google_usecase/sign_in_with_google_usecase';

const Page = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleGoogleSignUp = async () => {
    try {
      // Google認証処理
      const usecase = new SignInWithGoogleUsecase()
      const response = await usecase.execute()

      if (response.result) {
        router.push('/')
      }
    } catch (error: any) {
      if (error instanceof FirebaseAuthException) {
        // Firebaseのエラーをハンドリング
        setIsOpen(true)
        setMessage(error.message)
      } else if (error instanceof Error) {
        // システムエラーをハンドリング
        setIsOpen(true)
        setMessage(error.message)
      } else {
        // システムエラーをハンドリング
        setIsOpen(true)
        setMessage(new SystemErrorException().message)
      }
    }
  }
  return (
    <div className='max-w-screen-md mx-auto pt-12 px-4 flex items-center justify-center'>
      <div className='md:w-1/2 w-full bg-gray-100 rounded-md flex flex-col items-center gap-4 p-4'>
        <MediumText text='新規登録' isBold={true} />
        <button
          onClick={handleGoogleSignUp}
          className='flex gap-4 items-center px-4 py-2 bg-white rounded-md shadow-md hover:shadow-none
          hover:bg-slate-600 hover:text-white hover:translate-y-1 hover:duration-300 transition-all'
        >
          <FcGoogle size={25} />
          <SmallText text='Googleで登録' isBold={true} />
        </button>
      </div>
      <ErrorModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />
    </div>
  )
}

export default Page
