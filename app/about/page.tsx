import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutUs } from "@/components/about-us"

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
