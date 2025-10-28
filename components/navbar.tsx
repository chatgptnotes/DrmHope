"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-red-100 dark:border-red-900 bg-white dark:bg-gray-950">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/services"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            Services
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            Solutions
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            Our Projects
          </Link>
          <Link
            href="/client-success"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            Client Success
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact">
            <Button className="hidden md:flex bg-red-600 hover:bg-red-700 text-white">
              Contact Us
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t border-red-100 dark:border-red-900">
          <nav className="flex flex-col gap-4">
            <Link
              href="/services"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Projects
            </Link>
            <Link
              href="/client-success"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Success
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
