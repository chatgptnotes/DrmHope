import Link from "next/link"
import { Logo } from "@/components/logo"
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary-100 dark:border-primary-900 bg-white dark:bg-gray-950">
      <div className="container flex flex-col gap-8 py-8 md:py-12 lg:py-16">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              AI-driven software development and consulting. Technology partner of Bettroi.
            </p>
            <address className="not-italic text-sm text-secondary-600 dark:text-secondary-400 space-y-1">
              <p>701, Casa Royal Apartment, Mohan Nagar</p>
              <p>Nagpur, Maharashtra 440001, India</p>
              <p><a href="tel:+918412030400" className="hover:text-primary-600 dark:hover:text-primary-400">+91 8412030400</a></p>
              <p><a href="mailto:info@drmhope.com" className="hover:text-primary-600 dark:hover:text-primary-400">info@drmhope.com</a></p>
            </address>
            <div className="flex gap-3 pt-2">
              <Link href="https://www.facebook.com/drmhope" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400 p-3">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/drmhope" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400 p-3">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/@drmhope" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400 p-3">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/drmhope" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400 p-3">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/drmhope" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400 p-3">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">AI Solutions</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/ai-software-development"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 inline-block"
                >
                  AI Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/healthcare-ai-solutions"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 inline-block"
                >
                  Healthcare AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-agentic-platforms"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 inline-block"
                >
                  AI Agentic Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 inline-block"
                >
                  Machine Learning & NLP
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 inline-block"
                >
                  Enterprise AI Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-2 inline-block"
                >
                  About DrM Hope
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-2 inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-2 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/client-success"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-2 inline-block"
                >
                  Client Success
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-2 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 inline-block"
                >
                  AI Development Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 inline-block"
                >
                  AI Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/client-success"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 inline-block"
                >
                  Client Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 inline-block"
                >
                  AI Project Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 inline-block"
                >
                  Free AI Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Partners Section */}
        <div className="mt-8 pt-8 border-t border-primary-100 dark:border-primary-900">
          <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-4">Technology Partners</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-secondary-600 dark:text-secondary-400">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <div>
                <Link href="https://bettroi.com" target="_blank" rel="noopener noreferrer"
                      className="text-base font-semibold text-primary-700 dark:text-primary-300 hover:text-primary-600 dark:hover:text-primary-400">
                  Bettroi
                </Link>
                <p className="text-xs text-secondary-600 dark:text-secondary-400">
                  Strategic Technology Partnership
                </p>
              </div>
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400 sm:border-l sm:border-primary-100 dark:sm:border-primary-900 sm:pl-4">
              DrM Hope is the AI software development and technology partner of Bettroi, delivering machine learning, NLP, and custom AI solutions.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-secondary-600 dark:text-secondary-400">
            © {new Date().getFullYear()} Dr.M Hope. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-2 inline-block"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-2 inline-block"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 py-2 inline-block"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
