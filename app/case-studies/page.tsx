import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Users, Zap, Target, Award } from "lucide-react"

export const metadata: Metadata = {
  title: 'AI Project Case Studies | Success Stories & Results',
  description: 'Explore our AI project case studies. See how we helped hospitals, enterprises, and businesses achieve remarkable results with AI software, agentic platforms, and intelligent automation.',
  keywords: [
    'AI case studies',
    'AI project success stories',
    'healthcare AI results',
    'AI implementation examples',
    'AI ROI case studies'
  ]
}

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Hope Hospital: Transforming Healthcare with AI-Powered HIS",
      client: "Hope Hospital",
      industry: "Healthcare",
      challenge: "Managing 100-bed super specialty hospital with manual processes, leading to inefficiencies and delayed patient care",
      solution: "Implemented DrMHope AI Platform with NLP medical records, predictive analytics, AI-powered patient flow optimization, and intelligent billing",
      results: [
        "80% reduction in documentation time",
        "50% faster patient registration",
        "95% accuracy in automated medical coding",
        "70% reduction in billing errors",
        "$500K+ annual cost savings",
        "Serving 5M+ patients across Central India"
      ],
      technologies: ["AI/ML", "NLP", "Predictive Analytics", "Cloud Platform"],
      metrics: [
        { label: "Patients Served", value: "5M+", icon: <Users className="h-5 w-5" /> },
        { label: "Time Saved", value: "80%", icon: <Zap className="h-5 w-5" /> },
        { label: "Cost Reduction", value: "$500K", icon: <TrendingUp className="h-5 w-5" /> },
        { label: "Accuracy", value: "95%", icon: <Target className="h-5 w-5" /> }
      ],
      featured: true,
      imageColor: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "AutoAISale: 10x Sales Productivity with AI Automation",
      client: "Multiple Sales Teams",
      industry: "Business / SaaS",
      challenge: "Sales teams spending 20+ hours per week on manual outreach, follow-ups, and data entry with low conversion rates",
      solution: "Built AI-powered sales automation platform with Bolna AI voice calling, OpenAI-driven email automation, and seamless CRM integration",
      results: [
        "10x faster sales outreach",
        "300% increase in conversion rates",
        "20+ hours saved per salesperson/week",
        "Zero manual data entry with auto-sync",
        "500+ sales teams using the platform",
        "$2M+ revenue generated for clients"
      ],
      technologies: ["Bolna AI", "OpenAI", "NLP", "CRM APIs", "Supabase"],
      metrics: [
        { label: "Faster Outreach", value: "10x", icon: <Zap className="h-5 w-5" /> },
        { label: "Conversion Rate", value: "300%", icon: <TrendingUp className="h-5 w-5" /> },
        { label: "Time Saved", value: "20+ hrs", icon: <CheckCircle className="h-5 w-5" /> },
        { label: "Teams Using", value: "500+", icon: <Users className="h-5 w-5" /> }
      ],
      featured: true,
      imageColor: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      title: "Anohra Deep Guard AI: 98% Deepfake Detection Accuracy",
      client: "Law Enforcement & Enterprises",
      industry: "Cybersecurity / AI Technology",
      challenge: "Rising threat of deepfakes in media, forensics, and enterprise security with limited detection capabilities",
      solution: "Developed comprehensive AI deepfake detection platform with multi-format analysis (video, image, audio), multilayer assessment, and real-time processing",
      results: [
        "98% detection accuracy (vs 70% non-AI tools)",
        "35,000+ deepfakes identified in 12 months",
        "14 minutes saved per manual review",
        "9,000+ sources monitored in real-time",
        "Deployed across law enforcement agencies",
        "Enterprise-grade security (ISO 27001)"
      ],
      technologies: ["Deep Learning", "Computer Vision", "AI/ML", "Signal Processing"],
      metrics: [
        { label: "Detection Accuracy", value: "98%", icon: <Target className="h-5 w-5" /> },
        { label: "Deepfakes Found", value: "35K+", icon: <Award className="h-5 w-5" /> },
        { label: "Time Saved", value: "14 min", icon: <Zap className="h-5 w-5" /> },
        { label: "Sources Tracked", value: "9K+", icon: <TrendingUp className="h-5 w-5" /> }
      ],
      featured: true,
      imageColor: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Raftaar Emergency AI: 40% Faster Ambulance Response",
      client: "Emergency Medical Services",
      industry: "Healthcare / Emergency Services",
      challenge: "Slow emergency response times, manual dispatch, and lack of real-time tracking leading to delayed patient care",
      solution: "Built AI-powered ambulance network with intelligent dispatch, crash detection, real-time GPS tracking, and Anohra AI voice assistant",
      results: [
        "40% faster ambulance arrival times",
        "<10 minutes average response time",
        "Automated crash detection and alerts",
        "104+ hospital integrations",
        "Real-time family notifications via WhatsApp",
        "India's first AI-driven logistics aggregator on ONDC"
      ],
      technologies: ["AI/ML", "GPS Systems", "Voice AI", "Real-time Analytics"],
      metrics: [
        { label: "Faster Response", value: "40%", icon: <Zap className="h-5 w-5" /> },
        { label: "Avg Response", value: "<10 min", icon: <CheckCircle className="h-5 w-5" /> },
        { label: "Hospitals", value: "104+", icon: <Users className="h-5 w-5" /> },
        { label: "Innovation", value: "ONDC 1st", icon: <Award className="h-5 w-5" /> }
      ],
      featured: false,
      imageColor: "from-red-500 to-yellow-500"
    },
    {
      id: 5,
      title: "BhashAI: Voice AI Platform Transforming Customer Service",
      client: "Enterprise Customers",
      industry: "AI Technology / Voice AI",
      challenge: "Businesses struggling with high call volumes, limited support hours, and expensive human call centers",
      solution: "Developed customizable voice AI platform with NLP, sentiment analysis, multi-language support, and CRM integration",
      results: [
        "24/7 automated customer support",
        "70% reduction in support costs",
        "95%+ customer satisfaction",
        "Multi-language voice support",
        "Seamless CRM integration",
        "Handles 10K+ calls per day"
      ],
      technologies: ["Voice AI", "NLP", "Speech Recognition", "Cloud Telephony"],
      metrics: [
        { label: "Cost Reduction", value: "70%", icon: <TrendingUp className="h-5 w-5" /> },
        { label: "Satisfaction", value: "95%", icon: <Target className="h-5 w-5" /> },
        { label: "Availability", value: "24/7", icon: <Zap className="h-5 w-5" /> },
        { label: "Calls/Day", value: "10K+", icon: <Users className="h-5 w-5" /> }
      ],
      featured: false,
      imageColor: "from-cyan-500 to-blue-500"
    },
    {
      id: 6,
      title: "Linkist: AI-Powered Personal Relationship Manager",
      client: "Business Professionals",
      industry: "Business / Networking",
      challenge: "Professionals struggling to maintain meaningful business relationships and follow up with contacts effectively",
      solution: "Created AI-driven PRM with NFC business cards, smart recall reminders, ICP scoring, and intelligent engagement tracking",
      results: [
        "80% improvement in lead capture rate",
        "AI nudges for timely outreach",
        "ICP scoring for ideal customer matching",
        "Real-time engagement tracking",
        "Premium NFC cards (metal, wood, PVC)",
        "Organization-wide contact intelligence"
      ],
      technologies: ["NFC Technology", "AI/ML", "Mobile-First Design", "Cloud Platform"],
      metrics: [
        { label: "Lead Capture", value: "80%", icon: <TrendingUp className="h-5 w-5" /> },
        { label: "Smart Nudges", value: "AI", icon: <Zap className="h-5 w-5" /> },
        { label: "ICP Matching", value: "Intelligent", icon: <Target className="h-5 w-5" /> },
        { label: "Enterprise", value: "Ready", icon: <Award className="h-5 w-5" /> }
      ],
      featured: false,
      imageColor: "from-green-500 to-teal-500"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <Badge className="mb-4 bg-blue-600 text-white">📊 Success Stories</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                AI Project Case Studies
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Real-world results from our AI software development projects. See how we helped businesses transform with AI-powered solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Case Studies</h2>

            <div className="space-y-12">
              {caseStudies.filter(study => study.featured).map((study) => (
                <Card key={study.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-3 bg-gradient-to-r ${study.imageColor}`}></div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>{study.industry}</Badge>
                      <Badge variant="outline">{study.client}</Badge>
                    </div>
                    <CardTitle className="text-3xl mb-4">{study.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.metrics.map((metric, index) => (
                        <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">
                            {metric.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-red-600" />
                        Challenge
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-blue-600" />
                        Solution
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        Results
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* More Case Studies */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">More Success Stories</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.filter(study => !study.featured).map((study) => (
                <Card key={study.id} className="hover:shadow-lg transition-shadow">
                  <div className={`h-2 bg-gradient-to-r ${study.imageColor}`}></div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">{study.industry}</Badge>
                    </div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription className="text-base">
                      {study.solution}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {study.metrics.slice(0, 2).map((metric, index) => (
                        <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                          <div className="text-xl font-bold text-blue-600 mb-1">{metric.value}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full">View Full Case Study</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how AI can transform your business with measurable results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View All Projects
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
