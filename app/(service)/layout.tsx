import Header from '@/components/header/Header';
import NavBar from '@/components/navbar/NavBar';
import { CurrentUserProvider } from '@/providers/CurrentUserProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CurrentUserProvider>
      <div className='w-full h-screen'>
        <Header />
        {children}
        <NavBar />
      </div>
    </CurrentUserProvider>
  )
}
