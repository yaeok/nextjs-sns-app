import { useForm } from 'react-hook-form';

import ElevatedButton from '@/components/button/submit/elevated/ElevatedButton';
import { PostArticleUsecase } from '@/usecase/post_article_usecase/post_article_usecase';

type FormType = {
  title: string
  content: string
}

export default function ArticleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      title: '',
      content: '',
    },
  })
  const onSubmit = handleSubmit(async (data) => {
    const { title, content } = data

    const usecase = new PostArticleUsecase()

    await usecase.execute({ title, content })
  })
  return (
    <form
      onSubmit={onSubmit}
      className='w-full flex flex-col items-center gap-4'
    >
      <section className='w-full flex flex-col gap-4'>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='' className='text-sm'>
            タイトル<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            {...register('title', {
              required: 'タイトルは必須です',
              maxLength: { value: 50, message: '50文字以内で入力してください' },
            })}
            className='w-full p-2 border border-gray-300 rounded-md'
          />
          {errors.title && (
            <span className='pl-2 text-sm text-red-500'>
              {errors.title.message}
            </span>
          )}
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='' className='text-sm'>
            内容
          </label>
          <textarea
            {...register('content', {
              maxLength: {
                value: 1000,
                message: '1000文字以内で入力してください',
              },
            })}
            className='w-full p-2 border border-gray-300 rounded-md max-h-44 text-sm'
          />
          {errors.content && (
            <span className='pl-2 text-sm text-red-500'>
              {errors.content.message}
            </span>
          )}
        </div>
      </section>
      <section>
        <ElevatedButton text='投稿' />
      </section>
    </form>
  )
}
