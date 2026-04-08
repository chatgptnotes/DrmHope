import Image from "next/image"
import { Brain, Users, Rocket, Shield } from "lucide-react"

export function AdvantageSection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose DrM Hope for AI Development
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            At DrM Hope, we trust in <strong className="text-red-600">DATA</strong> and follow a <strong className="text-red-600">Human + AI</strong> approach to drive real impact. Our AI software development consulting starts by analyzing your data, systems, and processes to identify opportunities for machine learning, NLP, and intelligent automation.
          </p>
        </div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-16">
          <div>
            <Image
              src="/images/pexels-markusspiske-225769.jpg"
              alt="AI software development and business process automation"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl w-full h-auto"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              AI-Powered Software Development
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Through collaborative prioritization, we ensure our <strong>AI technology solutions</strong> align with your goals and maximize ROI. By optimizing operations and enhancing customer experiences, we turn satisfaction into sustainable profitability.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We balance human intelligence with AI-driven insights for measurable success, delivering <strong>100+ successful projects</strong> across <strong>healthcare AI</strong>, business automation, and <strong>enterprise AI solutions</strong>.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
              <Brain className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Custom AI Development
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              We build custom AI solutions tailored to your business, from healthcare AI systems to enterprise automation platforms.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              AI Consulting & Guidance
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Our AI consulting team guides you from concept to deployment — machine learning, NLP, computer vision, and AI agentic systems.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
              <Rocket className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Scalable AI Platforms
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              We build scalable AI platforms with continuous optimization, from generative AI to predictive analytics and intelligent automation.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              100+ AI Projects Delivered
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Proven track record across healthcare AI, enterprise software development, and AI agentic platforms with 98% client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
