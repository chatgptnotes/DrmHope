import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t border-primary-100 dark:border-primary-900 bg-white dark:bg-gray-950">
      <div className="container flex flex-col gap-8 py-8 md:py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Advanced hospital management software solutions for healthcare facilities worldwide.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Patient Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Electronic Health Records
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Billing & Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Pharmacy Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Laboratory Information
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Case Studies
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
              DRM Hope Software is the technology development partner of Bettroi, providing innovative software solutions and engineering expertise.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-secondary-600 dark:text-secondary-400">
            © {new Date().getFullYear()} Dr.M Hope. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
