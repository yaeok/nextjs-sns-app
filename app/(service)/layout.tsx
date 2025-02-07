import Header from '@/components/header/Header';
import NavBar from '@/components/navbar/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='w-full h-screen'>
      <Header />
      {children}
      <NavBar />
    </div>
  )
}
