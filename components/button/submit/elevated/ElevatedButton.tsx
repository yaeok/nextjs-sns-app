type props = {
  text: string
}

export default function ElevatedButton({ text }: props) {
  return (
    <button
      type='submit'
      className='
      bg-primary-500 border-2 border-primary-500 text-white shadow-md rounded-md px-4 py-2 text-sm font-semibold
      hover:bg-primary-500 hover:opacity-90 hover:shadow-none hover:translate-y-1 duration-300'
    >
      {text}
    </button>
  )
}
