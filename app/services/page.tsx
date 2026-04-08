import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.drmhope.com/services',
  },
  title: 'AI Development Services',
  description: 'End-to-end AI services including custom software development, machine learning, NLP, voice AI, and intelligent automation for enterprises.',
  openGraph: {
    title: 'AI Development Services | DrM Hope',
    description: 'End-to-end AI services including custom software development, machine learning, NLP, voice AI, and intelligent automation for enterprises.',
    url: 'https://www.drmhope.com/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
