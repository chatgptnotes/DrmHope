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
    <header className="sticky top-0 z-50 w-full border-b border-red-100 dark:border-red-900 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="/services"
            className="text-[15px] font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            Services
          </Link>
          <Link
            href="/solutions"
            className="text-[15px] font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            Solutions
          </Link>
          <Link
            href="/projects"
            className="text-[15px] font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            Our Projects
          </Link>
          <Link
            href="/blog"
            className="text-[15px] font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            Blog
          </Link>
          <Link
            href="/client-success"
            className="text-[15px] font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            Client Success
          </Link>
          <Link
            href="/about"
            className="text-[15px] font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400"
          >
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact">
            <Button className="hidden md:flex h-10 px-5 text-sm bg-red-600 hover:bg-red-700 text-white">
              Contact Us
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden h-11 w-11" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 md:hidden py-4 border-t border-red-100 dark:border-red-900 max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            <Link
              href="/services"
              className="text-base font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400 py-3 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="text-base font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400 py-3 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/projects"
              className="text-base font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400 py-3 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Projects
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400 py-3 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/client-success"
              className="text-base font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400 py-3 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Success
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-red-600 dark:hover:text-red-400 py-3 px-2"
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
