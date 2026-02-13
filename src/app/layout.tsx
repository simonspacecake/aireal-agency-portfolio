import type { Metadata } from 'next'
import { Providers } from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Dev Agency // CLI Edition',
  description: 'AI-powered development agency. Terminal-first, developer-native. Build faster, deploy smarter.',
  keywords: ['AI development', 'CLI tools', 'terminal', 'developer tools', 'web development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="scanlines crt-effect">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
