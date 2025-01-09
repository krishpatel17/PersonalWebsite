import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import { Navbar } from '@/components/components_navbar'
import '@/app/globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Krish Patel - Personal Website',
  description: 'Personal website showcasing my work and experience',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-black text-black dark:text-white relative overflow-hidden flex flex-col">
          <div 
            className="absolute inset-0 bg-grid-lines"
            style={{
              maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 120%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 120%)'
            }}
          />
          <div 
            className="absolute inset-0 w-full h-full animate-gradient"
            style={{
              filter: 'blur(60px)',
            }}
          />
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}