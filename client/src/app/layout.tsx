import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '../../components/Footer'
import "./styleTheme.scss"
import Header from '../../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoonGram: Discover Your Social Media Spark',
  description: 'Generated by Anushka Wijegoonawardana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}

        {children}

        <Footer />
      </body>
    </html>
  )
}
