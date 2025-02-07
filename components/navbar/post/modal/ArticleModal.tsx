import BaseModal from '@/components/modal/BaseModal';

import ArticleForm from '../form/ArticleForm';

type props = {
  isOpen: boolean
  onClose: () => void
}
export default function ArticleModal({ isOpen, onClose }: props) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} text='記事投稿' width='w-full'>
      <ArticleForm />
    </BaseModal>
  )
}
