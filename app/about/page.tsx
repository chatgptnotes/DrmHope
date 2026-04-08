import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutUs } from "@/components/about-us"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.drmhope.com/about',
  },
  title: 'About Us | Our AI Mission & Team',
  description: 'Meet Dr. Murali BK and the DrM Hope team. We build AI-powered software for healthcare, enterprise automation, and digital transformation.',
  openGraph: {
    title: 'About Us | Our AI Mission & Team | DrM Hope',
    description: 'Meet Dr. Murali BK and the DrM Hope team. We build AI-powered software for healthcare, enterprise automation, and digital transformation.',
    url: 'https://www.drmhope.com/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}
