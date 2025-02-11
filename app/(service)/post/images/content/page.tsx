'use client'

import ErrorText from '@/components/text/error/ErrorText'
import { useArticlePostState } from '../../_hooks/useArticlePostState'

const Page = () => {
  const { register, errors, onSubmit } = useArticlePostState()

  return (
    <div className='max-w-screen-md mx-auto px-2 py-4 space-y-2'>
      <form onSubmit={onSubmit} className='w-full space-y-4'>
        <section className='space-y-4'>
          <div className='w-full flex flex-col gap-2'>
            <label htmlFor=''>タイトル</label>
            <input
              type='text'
              {...register('title')}
              className='p-2 w-full border border-gray-300 rounded-md'
            />
            {errors.title && (
              <ErrorText text={errors.title.message!} isBold={false} />
            )}
          </div>
          <div className='w-full flex flex-col gap-2'>
            <label htmlFor=''>内容</label>
            <textarea
              {...register('content')}
              className='p-2 w-full border border-gray-300 rounded-md max-h-80'
            />
            {errors.content && (
              <ErrorText text={errors.content.message!} isBold={false} />
            )}
          </div>
        </section>
        <section className='w-full flex justify-center'>
          <button type='submit' className='bg-green-50'>
            登録する
          </button>
        </section>
      </form>
    </div>
  )
}

export default Page
