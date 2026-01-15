"use client"

import { Brain, Users, Rocket, Shield } from "lucide-react"

export function AdvantageSection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The DrM Hope Advantage
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            At DrM Hope, we trust in <strong className="text-red-600">DATA</strong> and follow a <strong className="text-red-600">Human + AI</strong> approach to drive real impact. We start by deeply understanding your business, analyzing data, technology, systems, and processes to identify opportunities for AI-powered improvement.
          </p>
        </div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/pexels-markusspiske-225769.jpg"
              alt="Business Process Automation"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              AI-Powered Software Development
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Through collaborative prioritization, we ensure our AI technology solutions align with your goals and maximize ROI. By optimizing operations and enhancing customer experiences, we turn satisfaction into sustainable profitability.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We balance human intelligence with AI-driven insights for measurable success, delivering 100+ successful projects across healthcare, business automation, and enterprise AI solutions.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
              <Brain className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Customized AI Solutions
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              We tailor our AI strategies to your specific needs, ensuring the best fit and highest impact for your business.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Expert Guidance
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Our team of AI experts guides you every step of the way, from concept to deployment and beyond.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
              <Rocket className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Long-Term Success
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Commitment to sustained growth with continuous optimization and AI model improvements.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Proven Track Record
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              100+ successful AI projects delivered with 98% client satisfaction rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
