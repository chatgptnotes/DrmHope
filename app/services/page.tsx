import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"

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
