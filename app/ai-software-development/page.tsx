import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Cpu, Database, Zap, Brain, MessageSquare, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: 'AI Software Development Company | Custom AI Solutions & ML Platforms',
  description: 'Leading AI software development company building custom AI solutions, machine learning platforms, NLP systems, and intelligent automation. 100+ successful AI projects delivered across healthcare, business, and enterprise.',
  keywords: [
    'AI software development',
    'AI software development company',
    'custom AI solutions',
    'AI development services',
    'machine learning development',
    'AI platform development',
    'artificial intelligence software',
    'AI application development',
    'enterprise AI solutions',
    'AI consulting services'
  ],
  openGraph: {
    title: 'AI Software Development Company | Custom AI Solutions',
    description: 'Expert AI software development services - Machine Learning, NLP, Computer Vision, and Intelligent Automation',
    type: 'website',
  }
}

export default function AISoftwareDevelopment() {
  const aiServices = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning Development",
      description: "Custom ML models, predictive analytics, and intelligent data processing systems tailored to your business needs."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions including chatbots, sentiment analysis, text classification, and language understanding."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Computer Vision AI",
      description: "Image recognition, object detection, facial recognition, and visual AI systems for automation."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Deep Learning Solutions",
      description: "Neural networks, transformers, and advanced deep learning architectures for complex AI applications."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Intelligent Automation",
      description: "AI-powered workflow automation, RPA with AI, and intelligent process optimization systems."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "AI Data Engineering",
      description: "Data pipelines, feature engineering, model training infrastructure, and MLOps solutions."
    }
  ]

  const technologies = [
    "TensorFlow", "PyTorch", "OpenAI GPT", "LangChain", "Hugging Face",
    "Anthropic Claude", "Google Gemini", "LlamaIndex", "Pinecone", "Weaviate",
    "scikit-learn", "Keras", "FastAPI", "Python", "Node.js", "React"
  ]

  const benefits = [
    "100+ Successful AI Projects Delivered",
    "Expert Team of AI/ML Engineers",
    "End-to-End AI Development",
    "Custom AI Solutions for Your Industry",
    "Scalable & Production-Ready Systems",
    "Ongoing Support & Maintenance",
    "Proven ROI & Business Impact",
    "HIPAA & Enterprise-Grade Security"
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700">
                AI Software Development Company
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Build Intelligent AI Software
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                  That Transforms Your Business
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Leading AI software development company specializing in custom AI solutions, machine learning platforms,
                NLP systems, computer vision, and intelligent automation. 100+ successful AI projects delivered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start Your AI Project
                </Button>
                <Button size="lg" variant="outline">
                  View AI Portfolio
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { number: "100+", label: "AI Projects" },
                { number: "50+", label: "AI Models Deployed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "AI Support" }
              ].map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our AI Software Development Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI development services to build intelligent, scalable, and production-ready AI solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 text-blue-600 dark:text-blue-400">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                AI Technologies We Master
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Cutting-edge AI frameworks and tools for building world-class solutions
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-base py-2 px-4">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Our AI Development Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your AI Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your AI project and create intelligent solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View AI Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
