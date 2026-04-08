import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.drmhope.com/contact',
  },
  title: 'Contact Us | Get a Free Consultation',
  description: 'Get in touch with DrM Hope for AI software development, consulting, or partnership inquiries. Free consultation for your next AI project.',
  openGraph: {
    title: 'Contact Us | Get a Free Consultation | DrM Hope',
    description: 'Get in touch with DrM Hope for AI software development, consulting, or partnership inquiries. Free consultation for your next AI project.',
    url: 'https://www.drmhope.com/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
