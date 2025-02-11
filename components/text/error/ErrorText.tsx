type props = {
  text: string
  isBold: boolean
}

export default function ErrorText({ text, isBold }: props) {
  return (
    <p
      className={`pl-2 text-sm text-red-500 ${
        isBold == true ? 'font-semibold' : ''
      }`}
    >
      {text}
    </p>
  )
}
