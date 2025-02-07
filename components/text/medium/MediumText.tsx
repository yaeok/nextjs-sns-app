type props = {
  text: string
  isBold?: boolean
}

export default function MediumText({ text, isBold }: props) {
  return <div className={`text-lg ${isBold ?? 'font-semibold'}`}>{text}</div>
}
