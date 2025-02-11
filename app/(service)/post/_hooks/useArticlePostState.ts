import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type ArticlePostForm = {
  title: string
  content: string
}

const schema = z.object({
  title: z.string().nonempty({
    message: 'タイトルを入力してください',
  }),
  content: z.string().nonempty({
    message: '本文を入力してください',
  }),
  images: z.array(z.string()).nonempty({
    message: '画像を選択してください',
  }),
})

export const useArticlePostState = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticlePostForm>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: ArticlePostForm) => {
    console.log(data)
  }

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  }
}
