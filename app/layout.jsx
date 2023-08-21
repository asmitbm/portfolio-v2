import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asmit Malakannawar',
  description: 'Personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  )
}
