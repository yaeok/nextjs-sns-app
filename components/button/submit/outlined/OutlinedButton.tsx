type props = {
  text: string
}

export default function OutlinedButton({ text }: props) {
  return (
    <button
      type='submit'
      className='
      bg-white border-2 border-primary-500 text-primary-500 shadow-md rounded-md px-4 py-2 text-sm font-semibold
      hover:bg-primary-500 hover:bg-opacity-20 hover:shadow-none hover:translate-y-1 duration-300'
    >
      {text}
    </button>
  )
}
