import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Solutions } from "@/components/solutions"

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Solutions />
      </main>
      <Footer />
    </div>
  )
}
