"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Stethoscope,
  Briefcase,
  Sparkles,
  Mic,
  Code,
  Database,
  Cloud,
  Shield,
  CheckCircle2,
  ArrowRight,
  Heart,
  TrendingUp,
  Users,
  Smartphone,
  Scissors,
  GraduationCap,
  MessageSquare,
} from "lucide-react"
import { GetStartedModal } from "./get-started-modal"

interface Service {
  id: string
  title: string
  shortTitle: string
  icon: any
  description: string
  detailedDescription: string
  aiCapabilities: string[]
  keyFeatures: string[]
  technologies: string[]
  exampleProjects: { name: string; url?: string }[]
  stats?: { label: string; value: string }[]
}

const services: Service[] = [
  {
    id: "healthcare",
    title: "AI-Powered Healthcare Solutions",
    shortTitle: "Healthcare",
    icon: Stethoscope,
    description:
      "Comprehensive healthcare management platforms with advanced AI features for hospitals, clinics, and medical facilities.",
    detailedDescription:
      "Transform healthcare delivery with our AI-powered healthcare solutions. From intelligent patient diagnostics to predictive analytics, we build comprehensive platforms that streamline operations, enhance patient care, and improve outcomes across the entire healthcare ecosystem.",
    aiCapabilities: [
      "AI-powered patient diagnostics and triage support",
      "Predictive analytics for patient outcomes and disease prevention",
      "Intelligent appointment scheduling and resource optimization",
      "Automated medical records processing and EHR management",
      "Smart health monitoring with real-time alerts",
      "AI-driven medication management and reminders",
    ],
    keyFeatures: [
      "Hospital Management Systems (HMS)",
      "Electronic Health Records (EHR)",
      "Telemedicine & Video Consultation",
      "Laboratory & Pharmacy Integration",
      "Patient Management & Monitoring",
      "Medical Billing & Insurance Processing",
      "Multi-facility Management",
      "Healthcare Analytics & Reporting",
    ],
    technologies: [
      "Healthcare AI/ML",
      "FHIR Standards",
      "HIPAA Compliance",
      "Cloud Infrastructure",
      "Real-Time Monitoring",
      "Mobile Health Apps",
    ],
    exampleProjects: [
      { name: "Adamrit Healthcare Platform", url: "https://adamrit.com" },
      { name: "RSeva Health", url: "https://www.rseva.health" },
      { name: "AI Surgeon Pilot", url: "https://www.aisurgeonpilot.com" },
      { name: "Hospiview", url: "https://hospiview-app.vercel.app" },
      { name: "Limitless Brain Wellness (LBW)" },
      { name: "Neuro360 - EEG Report Management" },
      { name: "NABH Quality Management" },
      { name: "Clinivoice - Healthcare Voice AI" },
    ],
    stats: [
      { label: "Healthcare Projects", value: "9+" },
      { label: "Patient Records Managed", value: "100K+" },
      { label: "Healthcare Facilities", value: "50+" },
    ],
  },
  {
    id: "business",
    title: "AI-Powered Business & Enterprise Solutions",
    shortTitle: "Business",
    icon: Briefcase,
    description:
      "Intelligent business platforms for CRM, project management, proposal automation, and enterprise operations.",
    detailedDescription:
      "Empower your business with AI-driven enterprise solutions that optimize workflows, enhance productivity, and drive growth. Our platforms leverage cutting-edge AI to automate processes, provide intelligent insights, and transform how businesses operate.",
    aiCapabilities: [
      "AI-powered ICP scoring and customer intelligence",
      "Intelligent lead capture with 80% improvement rate",
      "AI Nudges & Smart Recall for relationship management",
      "Predictive analytics for project timelines and risks",
      "Automated content generation and pricing optimization",
      "AI-driven proposal intelligence and research",
    ],
    keyFeatures: [
      "Personal Relationship Management (PRM)",
      "Real-Time Project Tracking & Analytics",
      "Intelligent Proposal Management",
      "AI-Powered CRM & Contact Management",
      "Resource Allocation & Optimization",
      "Business Intelligence & Reporting",
      "Multi-Organization Support",
      "Integration with Enterprise Systems",
    ],
    technologies: [
      "AI/ML Models",
      "NFC Technology",
      "Real-Time Analytics",
      "Cloud Platform",
      "Mobile-First Design",
      "API Integration",
    ],
    exampleProjects: [
      { name: "Linkist - Personal Relationship Manager", url: "https://linkist.2men.co" },
      { name: "PulseOfProject", url: "https://pulseofproject.com" },
      { name: "Proposify AI", url: "https://www.proposifyai.com" },
      { name: "ORMA - AI Studio", url: "https://orma-main-kyac.vercel.app" },
    ],
    stats: [
      { label: "Business Projects", value: "4+" },
      { label: "Enterprise Users", value: "10K+" },
      { label: "Automation Rate", value: "80%" },
    ],
  },
  {
    id: "beauty",
    title: "AI Virtual Try-On & Beauty Tech",
    shortTitle: "Beauty Tech",
    icon: Scissors,
    description:
      "Revolutionary virtual try-on platforms using AI for hairstyles, beauty, and wedding photography.",
    detailedDescription:
      "Transform the beauty and lifestyle industry with our AI-powered virtual try-on technology. From hairstyle simulation to pre-wedding photography, we create immersive experiences that help users make confident decisions before committing to real-world changes.",
    aiCapabilities: [
      "Google Generative AI-powered image generation",
      "AI-driven realistic rendering and visualization",
      "Intelligent style recommendations based on facial features",
      "Advanced facial recognition and landmark detection",
      "AI-enhanced photo processing and beautification",
      "Smart hair color and texture simulation",
    ],
    keyFeatures: [
      "Virtual Hairstyle Try-On",
      "AI Pre-Wedding Photography Generation",
      "Facial Detection & Analysis",
      "Real-Time Style Preview",
      "Multiple Style Options & Variations",
      "High-Resolution Output",
      "Booking Integration with Professionals",
      "Mobile-Optimized Experience",
    ],
    technologies: [
      "Google Generative AI",
      "TensorFlow.js",
      "MediaPipe",
      "Computer Vision",
      "Deep Learning",
      "Cloud Processing",
    ],
    exampleProjects: [
      { name: "StyleMy.Hair", url: "https://stylemy.hair" },
      { name: "PreWed AI", url: "https://prewedai.com" },
      { name: "Headz - AI Virtual Hair Try-On" },
    ],
    stats: [
      { label: "Beauty Tech Projects", value: "3+" },
      { label: "User Transformations", value: "50K+" },
      { label: "Style Options", value: "100+" },
    ],
  },
  {
    id: "education",
    title: "AI-Powered Education Platforms",
    shortTitle: "Education",
    icon: GraduationCap,
    description:
      "Adaptive learning platforms with photorealistic AI tutors for personalized education experiences.",
    detailedDescription:
      "Revolutionize education with our AI-powered tutoring platforms. Featuring photorealistic AI tutors that adapt to individual learning styles, our solutions provide personalized instruction across multiple subjects with real-time emotional recognition and intelligent progress tracking.",
    aiCapabilities: [
      "Photorealistic AI tutor with human-like interaction",
      "Real-time emotional and learning style recognition",
      "Adaptive teaching for different learner profiles",
      "AI-powered Socratic questioning methodology",
      "Personalized pace adjustment based on student needs",
      "Intelligent progress tracking with mastery analytics",
    ],
    keyFeatures: [
      "Six-Step Learning Journey Framework",
      "Curriculum-Aligned Content (IB, A-Level, AP, IGCSE)",
      "24/7 AI Tutor Availability",
      "Multi-Subject Support",
      "Detailed Progress Tracking",
      "Mark Scheme Awareness",
      "Exam Technique Coaching",
      "Non-Judgmental Learning Environment",
    ],
    technologies: [
      "Next.js",
      "AI/ML Models",
      "Emotional Recognition",
      "Adaptive Learning AI",
      "Natural Language Processing",
      "Real-Time Analytics",
    ],
    exampleProjects: [{ name: "AI-Shu - Photorealistic AI Tutor", url: "https://ai-shu.vercel.app" }],
    stats: [
      { label: "Education Projects", value: "1+" },
      { label: "Students Taught", value: "5K+" },
      { label: "Learning Effectiveness", value: "95%" },
    ],
  },
  {
    id: "voice",
    title: "Voice AI & Mobile Development",
    shortTitle: "Voice AI",
    icon: Mic,
    description:
      "Advanced voice AI applications and mobile platforms with natural language processing capabilities.",
    detailedDescription:
      "Build the future of voice interaction with our AI-powered voice and mobile solutions. From natural voice conversations to Hindi/Hinglish support, we create seamless voice-enabled experiences that enhance accessibility and user engagement across platforms.",
    aiCapabilities: [
      "Natural voice-based AI conversations",
      "Real-time speech-to-text and text-to-speech",
      "Hindi/Hinglish AI voice agent support",
      "Context-aware conversation management",
      "Intelligent call routing and analytics",
      "AI-powered conversation handling",
    ],
    keyFeatures: [
      "Hands-Free Voice Interaction",
      "Multi-Language Support (Hindi/Hinglish)",
      "Real-Time Audio Processing",
      "Conversation History & Management",
      "Native Speech Recognition",
      "Cross-Platform Mobile Support (iOS/Android)",
      "Call Logging & Analytics",
      "ElevenLabs AI Integration",
    ],
    technologies: [
      "React Native",
      "ElevenLabs AI",
      "Speech Recognition",
      "Text-to-Speech",
      "Flask/Python",
      "Mobile-First Architecture",
    ],
    exampleProjects: [
      { name: "Voice Agent App" },
      { name: "Clinivoice - Healthcare Voice AI" },
      { name: "HealthPlus - Clinic Management App" },
    ],
    stats: [
      { label: "Voice AI Projects", value: "3+" },
      { label: "Voice Conversations", value: "25K+" },
      { label: "Language Support", value: "Multi-Lingual" },
    ],
  },
  {
    id: "custom",
    title: "Custom AI Integration Services",
    shortTitle: "Custom AI",
    icon: Code,
    description:
      "Tailored AI-powered software solutions designed for your unique business challenges and requirements.",
    detailedDescription:
      "Transform your business with custom AI integration services. We analyze your unique challenges, design intelligent solutions, and implement cutting-edge AI technologies that align with your business goals. From concept to deployment, we deliver solutions that drive measurable results.",
    aiCapabilities: [
      "Custom AI model development and training",
      "Integration with existing business systems",
      "Intelligent process automation",
      "Advanced data analytics and insights",
      "Computer vision and image processing",
      "Natural language processing solutions",
    ],
    keyFeatures: [
      "Comprehensive Business Analysis",
      "AI Strategy & Roadmap Development",
      "Custom AI Model Development",
      "Legacy System AI Integration",
      "Scalable Cloud Architecture",
      "Real-Time Data Processing",
      "API Development & Integration",
      "Ongoing Support & Optimization",
    ],
    technologies: [
      "Python/TensorFlow",
      "Google AI/OpenAI",
      "Cloud Infrastructure (AWS/Azure)",
      "Microservices Architecture",
      "Docker/Kubernetes",
      "GraphQL/REST APIs",
    ],
    exampleProjects: [
      { name: "Custom Healthcare AI Solutions" },
      { name: "Enterprise AI Platforms" },
      { name: "Industry-Specific AI Applications" },
    ],
    stats: [
      { label: "Custom Projects", value: "18+" },
      { label: "Industries Served", value: "8+" },
      { label: "Client Satisfaction", value: "98%" },
    ],
  },
]

const techStack = [
  { name: "AI & Machine Learning", icon: Brain, items: ["TensorFlow", "Google AI", "OpenAI", "Deep Learning"] },
  { name: "Cloud & Infrastructure", icon: Cloud, items: ["AWS", "Azure", "Vercel", "Docker"] },
  { name: "Databases", icon: Database, items: ["Supabase", "PostgreSQL", "Redis", "DynamoDB"] },
  { name: "Security & Compliance", icon: Shield, items: ["HIPAA", "GDPR", "JWT Auth", "Row Level Security"] },
]

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<Service>(services[0])

  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-50 dark:from-gray-950 dark:to-red-950/50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
          <Badge className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-white px-4 py-2 text-sm font-semibold">
            <Sparkles className="h-4 w-4 mr-2 inline" />
            AI-Powered Innovation
          </Badge>
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-red-700 dark:text-white">
            Our Services
          </h1>
          <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
            From healthcare to enterprise, education to beauty tech - we deliver AI-powered solutions that transform
            businesses and create exceptional user experiences
          </p>
        </div>

        {/* Services Tabs */}
        <div className="mb-16">
          <Tabs
            defaultValue={services[0].id}
            className="w-full"
            onValueChange={(value) => {
              const service = services.find((s) => s.id === value)
              if (service) setSelectedService(service)
            }}
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-red-100 dark:bg-red-900 mb-8 h-auto">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-red-700 dark:data-[state=active]:text-red-300 py-3 px-2 flex flex-col items-center gap-2"
                >
                  <service.icon className="h-5 w-5" />
                  <span className="text-xs md:text-sm text-center leading-tight whitespace-normal">{service.shortTitle}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent
                key={service.id}
                value={service.id}
                className="p-6 md:p-8 bg-white dark:bg-gray-950 rounded-lg border border-red-100 dark:border-red-900 shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
                        <service.icon className="h-8 w-8 text-red-700 dark:text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-red-700 dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">{service.detailedDescription}</p>

                    {/* Stats */}
                    {service.stats && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {service.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="text-center p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-100 dark:border-red-900"
                          >
                            <div className="text-2xl font-bold text-red-700 dark:text-white">{stat.value}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* AI Capabilities */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="h-5 w-5 text-red-600 dark:text-white" />
                        <h3 className="text-xl font-semibold text-red-700 dark:text-white">AI Capabilities</h3>
                      </div>
                      <ul className="space-y-2">
                        {service.aiCapabilities.slice(0, 4).map((capability, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300 bg-red-50 dark:bg-red-950/30 p-3 rounded-md"
                          >
                            <CheckCircle2 className="h-5 w-5 mt-0.5 text-red-600 dark:text-white flex-shrink-0" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Key Features */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="text-red-600 dark:text-white mt-1">•</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-red-300 dark:border-red-700 text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Example Projects */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-red-700 dark:text-white mb-3">Example Projects</h3>
                      <ul className="space-y-2">
                        {service.exampleProjects.slice(0, 4).map((project, index) => (
                          <li key={index} className="text-gray-700 dark:text-gray-300">
                            {project.url ? (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                              >
                                <ArrowRight className="h-4 w-4" />
                                <span className="underline">{project.name}</span>
                              </a>
                            ) : (
                              <span className="flex items-center gap-2">
                                <ArrowRight className="h-4 w-4 text-red-600 dark:text-white" />
                                {project.name}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button
                        className="bg-red-600 hover:bg-red-700 text-white w-full md:w-auto"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Get Started with {service.title.split(" ")[0]}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-700 dark:text-white mb-4">Our Technology Stack</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and secure AI-powered solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((category, index) => (
              <Card key={index} className="border-red-100 dark:border-red-900">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
                      <category.icon className="h-5 w-5 text-red-700 dark:text-white" />
                    </div>
                    <CardTitle className="text-lg text-red-700 dark:text-white">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-red-600 dark:text-white" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16 bg-white dark:bg-gray-900 p-8 md:p-12 rounded-lg shadow-md border border-red-100 dark:border-red-900">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-700 dark:text-white mb-4">Our Development Approach</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful AI project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description:
                  "Deep dive into your business needs, challenges, and opportunities to design the perfect AI solution.",
              },
              {
                step: "02",
                title: "AI Strategy & Design",
                description:
                  "Architect intelligent systems with cutting-edge AI models tailored to your specific requirements.",
              },
              {
                step: "03",
                title: "Agile Development",
                description:
                  "Iterative development with continuous testing, feedback, and refinement for optimal results.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "Seamless implementation, training, and ongoing optimization to ensure long-term success.",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-white text-2xl font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-red-700 dark:text-white mb-2">{phase.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Brain,
              title: "AI Expertise",
              description:
                "18+ AI-powered projects delivered across healthcare, business, education, and lifestyle sectors.",
            },
            {
              icon: TrendingUp,
              title: "Proven Results",
              description: "80% improvement in automation, 98% client satisfaction, and measurable business impact.",
            },
            {
              icon: Users,
              title: "Client-Centric",
              description:
                "Dedicated support, transparent communication, and ongoing optimization for your success.",
            },
          ].map((benefit, index) => (
            <Card
              key={index}
              className="border-red-100 dark:border-red-900 hover:shadow-lg transition-shadow text-center"
            >
              <CardHeader>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-white mb-4 mx-auto">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-red-700 dark:text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how our AI-powered solutions can drive innovation, efficiency, and growth for your
            organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-red-600 px-8"
              onClick={() => setIsModalOpen(true)}
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8" asChild>
              <a href="/projects">View Our Projects</a>
            </Button>
          </div>
        </div>
      </div>
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
