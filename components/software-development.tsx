import { CheckCircle2, Code, Database, GitBranch, Globe, Shield } from "lucide-react"

export function SoftwareDevelopment() {
  return (
    <section
      id="development"
      className="py-16 bg-gradient-to-b from-white to-red-50 dark:from-gray-950 dark:to-red-950/50"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-red-700 dark:text-red-300">
            Our Development Approach
          </h2>
          <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
            Building robust, secure, and scalable software solutions with modern technologies for diverse industries
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Code className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-700 dark:text-red-300">Modern Tech Stack</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  We build our solutions using the latest technologies including React, Angular, Vue.js, Node.js, .NET,
                  Java, Python, and cloud-native architecture to ensure performance, scalability, and maintainability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-700 dark:text-red-300">Security-First Development</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Security is built into every stage of our development process, with regular audits, penetration
                  testing, and compliance checks to protect sensitive data across all industries.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <GitBranch className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-700 dark:text-red-300">Agile Methodology</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  We follow agile development practices with two-week sprints, continuous integration/continuous
                  deployment (CI/CD), and regular stakeholder feedback to deliver value quickly.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Database className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-700 dark:text-red-300">Types of Software We Develop</h3>
                <ul className="mt-2 text-gray-700 dark:text-gray-300 space-y-2 list-disc pl-5">
                  <li>
                    <strong>Healthcare Systems:</strong> Hospital management, EHR, laboratory information systems, and
                    telemedicine platforms
                  </li>
                  <li>
                    <strong>Financial Software:</strong> Banking systems, payment processing, accounting, and financial
                    analytics
                  </li>
                  <li>
                    <strong>Education Management:</strong> School management, learning platforms, and student
                    information systems
                  </li>
                  <li>
                    <strong>Retail Solutions:</strong> Inventory management, POS systems, e-commerce, and CRM solutions
                  </li>
                  <li>
                    <strong>Manufacturing ERP:</strong> Resource planning, supply chain, and production management
                  </li>
                  <li>
                    <strong>Mobile Applications:</strong> iOS, Android, and cross-platform mobile apps for various
                    industries
                  </li>
                  <li>
                    <strong>Custom Enterprise Solutions:</strong> Tailored software for unique business requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-red-100 dark:border-red-900">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 mb-4 mx-auto">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-center text-red-700 dark:text-red-300 mb-2">
              Microservices Architecture
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Our modular approach allows for independent scaling, faster development cycles, and improved resilience.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-red-100 dark:border-red-900">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 mb-4 mx-auto">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-center text-red-700 dark:text-red-300 mb-2">
              Cloud-Native Solutions
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Leveraging AWS, Azure, and Google Cloud for scalable, reliable infrastructure with automatic failover and
              disaster recovery.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-red-100 dark:border-red-900">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 mb-4 mx-auto">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-center text-red-700 dark:text-red-300 mb-2">Quality Assurance</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Comprehensive testing strategy including unit, integration, and end-to-end tests with 90%+ code coverage.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-red-100 dark:border-red-900">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4 text-center">
              Our Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="bg-red-100 dark:bg-red-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-red-700 dark:text-red-300">1</span>
                </div>
                <h4 className="font-semibold text-red-700 dark:text-red-300">Discovery</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Requirements gathering and analysis</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 dark:bg-red-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-red-700 dark:text-red-300">2</span>
                </div>
                <h4 className="font-semibold text-red-700 dark:text-red-300">Design</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">UX/UI and architecture planning</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 dark:bg-red-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-red-700 dark:text-red-300">3</span>
                </div>
                <h4 className="font-semibold text-red-700 dark:text-red-300">Development</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Agile sprints with CI/CD</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 dark:bg-red-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-red-700 dark:text-red-300">4</span>
                </div>
                <h4 className="font-semibold text-red-700 dark:text-red-300">Testing</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">QA, security, and performance</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 dark:bg-red-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-red-700 dark:text-red-300">5</span>
                </div>
                <h4 className="font-semibold text-red-700 dark:text-red-300">Deployment</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Release and continuous monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
