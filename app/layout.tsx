import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from '@/components/components_navbar'
import { Footer } from '@/components/components_footer'
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-black text-black dark:text-white relative overflow-hidden flex flex-col">
            <div 
              className="absolute inset-0 bg-grid-lines"
              style={{
                maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 120%)',
                WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 120%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}