type props = {
  text: string
  isBold?: boolean
}

export default function LargeText({ text, isBold }: props) {
  return <div className={`text-2xl ${isBold ?? 'font-semibold'}`}>{text}</div>
}
