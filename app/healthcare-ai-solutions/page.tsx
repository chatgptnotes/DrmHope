import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Hospital, Brain, FileText, Activity, Users, Shield, Zap, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: 'Healthcare AI Solutions | AI-Powered Hospital Management & Medical Software',
  description: 'Transform healthcare with AI-powered solutions. Hospital information systems, NLP medical records, predictive diagnostics, AI-assisted diagnosis, and intelligent automation for healthcare.',
  keywords: [
    'healthcare AI solutions',
    'AI healthcare software',
    'medical AI platforms',
    'AI hospital management',
    'healthcare AI development',
    'medical AI software',
    'AI for hospitals',
    'AI medical records',
    'predictive diagnostics AI',
    'healthcare automation',
    'AI clinical decision support',
    'medical NLP'
  ],
  openGraph: {
    title: 'Healthcare AI Solutions | AI-Powered Medical Software',
    description: 'Revolutionary AI healthcare solutions - Hospital management, NLP medical records, and predictive diagnostics',
    type: 'website',
  }
}

export default function HealthcareAISolutions() {
  const solutions = [
    {
      icon: <Hospital className="h-8 w-8" />,
      title: "AI Hospital Information Systems",
      description: "Comprehensive HIS with AI-powered patient registration, intelligent scheduling, automated workflows, and predictive analytics.",
      features: ["DrMHope AI Platform", "Smart EMR", "AI Billing"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "NLP Medical Documentation",
      description: "Natural language processing for automated medical record keeping, voice-to-text transcription, and intelligent medical coding.",
      features: ["Voice Documentation", "Auto-summarization", "ICD-10 Coding"]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Assisted Diagnosis",
      description: "Machine learning models for early disease detection, diagnostic support, and personalized treatment recommendations.",
      features: ["Image Analysis", "Predictive Models", "Risk Scoring"]
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Predictive Healthcare Analytics",
      description: "AI-driven insights for patient flow prediction, readmission prevention, bed management, and resource optimization.",
      features: ["Patient Flow AI", "Readmission Prevention", "Capacity Planning"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "AI Patient Engagement",
      description: "Intelligent chatbots, virtual health assistants, appointment automation, and 24/7 patient support systems.",
      features: ["AI Chatbots", "Virtual Assistants", "Smart Reminders"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Healthcare Workflow Automation",
      description: "Intelligent automation for administrative tasks, claims processing, inventory management, and operational workflows.",
      features: ["RPA + AI", "Claims Automation", "Smart Inventory"]
    }
  ]

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "80% Time Savings",
      description: "Reduce documentation and administrative time"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "95% Diagnostic Accuracy",
      description: "AI-enhanced medical imaging analysis"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "50% Reduced Wait Times",
      description: "AI-optimized patient flow and scheduling"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security and privacy"
    }
  ]

  const aiCapabilities = [
    "NLP-Powered Medical Records",
    "Predictive Patient Diagnostics",
    "AI Medical Imaging Analysis",
    "Intelligent Clinical Decision Support",
    "Automated Medical Coding (ICD-10)",
    "Voice-to-Text Medical Documentation",
    "Patient Risk Stratification",
    "Drug Interaction Detection",
    "Readmission Prediction Models",
    "AI-Driven Treatment Recommendations",
    "Real-Time Vital Monitoring",
    "Smart Emergency Triage"
  ]

  const healthcareProjects = [
    {
      name: "Hope Hospital",
      description: "NABH-accredited super specialty hospital with AI-powered HIS",
      stats: "5M+ Patients"
    },
    {
      name: "DrMHope AI Platform",
      description: "Award-winning hospital information system with AI",
      stats: "100+ Hospitals"
    },
    {
      name: "Raftaar Emergency AI",
      description: "AI-driven ambulance dispatch with crash detection",
      stats: "<10 min Response"
    },
    {
      name: "AI Doc Office",
      description: "Digital office platform for doctors with AI automation",
      stats: "1000+ Doctors"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-red-950 dark:to-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-600 text-white hover:bg-red-700">
                🏥 Healthcare AI Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Transform Healthcare with
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent block mt-2">
                  AI-Powered Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionary AI healthcare solutions powering hospitals, clinics, and medical practices. From AI hospital
                information systems to NLP medical records and predictive diagnostics - serving 5M+ patients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Explore Healthcare AI
                </Button>
                <Button size="lg" variant="outline">
                  View Healthcare Projects
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { number: "5M+", label: "Patients Served" },
                { number: "100+", label: "Hospitals" },
                { number: "20+", label: "Years Experience" },
                { number: "NABH", label: "Accredited" }
              ].map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Healthcare AI Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI-powered platforms for modern healthcare delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 text-red-600 dark:text-red-400">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {solution.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Impact of Healthcare AI
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block p-4 bg-red-100 dark:bg-red-900/30 rounded-lg mb-4">
                    <div className="text-red-600 dark:text-red-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                AI Capabilities for Healthcare
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Healthcare AI Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {healthcareProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600">{project.stats}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare with AI?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's build intelligent healthcare solutions that improve patient outcomes and streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
