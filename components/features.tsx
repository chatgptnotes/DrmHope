import { Activity, Clock, Database, Lock, Server, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Features() {
  return (
    <section id="features" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-primary-700 dark:text-primary-300">
          Key Features
        </h2>
        <p className="max-w-[85%] leading-normal text-secondary-600 dark:text-secondary-400 sm:text-lg sm:leading-7">
          Our hospital management software is packed with features to streamline operations and improve patient care
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/mobile-app.jpg"
            alt="Hospital management mobile app"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-start gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
              <Users className="h-6 w-6 text-primary-600 dark:text-primary-300" />
            </div>
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">Patient Management</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Efficiently manage patient information, appointments, and medical records in one place.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
              <Database className="h-6 w-6 text-primary-600 dark:text-primary-300" />
            </div>
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">Electronic Health Records</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Maintain comprehensive digital patient records that are secure, compliant, and easily accessible.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
              <Activity className="h-6 w-6 text-primary-600 dark:text-primary-300" />
            </div>
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">Clinical Management</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Support for clinical workflows, lab results, and treatment plans to enhance patient care.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
              <Clock className="h-6 w-6 text-primary-600 dark:text-primary-300" />
            </div>
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">Appointment Scheduling</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Streamline appointment booking, reduce no-shows, and optimize resource allocation.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-start gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
              <Server className="h-6 w-6 text-primary-600 dark:text-primary-300" />
            </div>
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">Cloud-Based Architecture</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Access your hospital management system from anywhere, on any device, with real-time updates.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
              <Lock className="h-6 w-6 text-primary-600 dark:text-primary-300" />
            </div>
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">Advanced Security</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Protect sensitive patient data with enterprise-grade security features and compliance measures.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 sm:col-span-2">
            <Button className="bg-primary-600 hover:bg-primary-700 text-white mt-4">
              <Link href="#solutions">View All Features</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/doctor-tablet.jpg"
            alt="Doctor using tablet with medical software"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
