type props = {
  text: string
  isBold: boolean
}

export default function LargeText({ text, isBold }: props) {
  return (
    <p className={`text-2xl ${isBold == true ? 'font-semibold' : ''}`}>
      {text}
    </p>
  )
}
