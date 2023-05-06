import MainWrapper from '@/components/MainWrapper'
import '@/style/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fiqry choerudin',
  description: 'personal site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MainWrapper className={inter.className}>{children}</MainWrapper>
    </html>
  )
}
