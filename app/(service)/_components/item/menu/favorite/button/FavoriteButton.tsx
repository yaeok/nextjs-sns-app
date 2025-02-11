import { FaRegHeart } from 'react-icons/fa6'

export default function FavoriteButton() {
  const handleFavorite = () => {}
  return (
    <>
      <button onClick={handleFavorite} className='rounded-full'>
        <FaRegHeart />
      </button>
    </>
  )
}
