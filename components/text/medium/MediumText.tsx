type props = {
  text: string
  isBold: boolean
}

export default function MediumText({ text, isBold = false }: props) {
  return (
    <p className={`text-lg ${isBold == true ? 'font-semibold' : ''}`}>{text}</p>
  )
}
