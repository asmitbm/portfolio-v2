import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

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
        <div><p>compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules compiled client and server successfully in 1308 ms 1032 modules</p></div>
        {children}
      </body>
    </html>
  )
}
