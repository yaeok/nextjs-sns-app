export const Page = async ({
  params,
}: {
  params: Promise<{
    id: string
  }>
}) => {
  const id = (await params).id
  return (
    <div>
      <h1 className='text-2xl font-semibold'>Account</h1>
      <p className='text-lg font-semibold'>ID: {id}</p>
      <p className='text-lg font-semibold'></p>
    </div>
  )
}

export default Page
