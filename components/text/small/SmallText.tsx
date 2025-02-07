type props = {
  text: string
  isBold?: boolean
}

export default function SmallText({ text, isBold }: props) {
  return <div className={`text-sm ${isBold ?? 'font-semibold'}`}>{text}</div>
}
