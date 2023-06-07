import { Nunito } from 'next/font/google'

import './globals.css' 
import { NextFont } from 'next/dist/compiled/@next/font';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './hooks/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font:NextFont = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>  
    </html>
  )
}
