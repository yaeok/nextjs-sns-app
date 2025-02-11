'use client'

import LargeText from '@/components/text/large/LargeText'
import SmallText from '@/components/text/small/SmallText'
import { useForm } from 'react-hook-form'

type LoginFormType = {
  email: string
  password: string
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='max-w-screen-md mx-auto pt-12 px-4'>
      <div className='w-full bg-gray-100 flex flex-col items-center gap-2 p-4'>
        <LargeText text='Sign In' isBold={true} />

        <form onSubmit={onSubmit} className='w-full'>
          <section className='w-full flex flex-col gap-4'>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor='email'>
                <SmallText text='メールアドレス' isBold={true} />
              </label>
              <div>
                <input
                  type='email'
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  className='w-full p-2 border border-gray-300 rounded-md'
                />
                {errors.email && (
                  <span className='pl-2 text-red-500'>
                    {errors.email.message?.toString()}
                  </span>
                )}
              </div>
            </div>
          </section>
          <section>
            <button type='submit'>登録</button>
          </section>
        </form>
      </div>
    </div>
  )
}

export default Page
