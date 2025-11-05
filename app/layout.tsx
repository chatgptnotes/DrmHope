import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

// export const metadata: Metadata = {
//   title: 'v0yy App',
//   description: 'Created with v0',
//   generator: 'v0.dev',
// }

export const metadata: Metadata = {
  title: 'Drm Hope',                     // ← new title
  description: 'Rapid emergency care with Raftaar Help Emergency Seva',
  icons: {
    icon: ' /images/1631365238387.jpeg',             // shows up as the favicon
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
