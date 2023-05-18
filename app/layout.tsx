import { Nunito } from 'next/font/google'

import './globals.css' 
import { NextFont } from 'next/dist/compiled/@next/font';
import Navbar from './components/navbar/Navbar';

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
        <Navbar />
        {children}
      </body>
    </html>
  )
}
