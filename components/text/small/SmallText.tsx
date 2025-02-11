type props = {
  text: string
  isBold: boolean
}

export default function SmallText({ text, isBold = false }: props) {
  return (
    <p className={`text-sm ${isBold == true ? 'font-semibold' : ''}`}>{text}</p>
  )
}
