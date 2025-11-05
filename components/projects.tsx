"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Calendar, Tag, Sparkles, X } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  detailedDescription?: string
  category: string
  tags: string[]
  aiFeatures?: string[]
  keyFeatures?: string[]
  technologies?: string[]
  image?: string
  demoUrl?: string
  githubUrl?: string
  websiteUrl?: string
  date: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Adamrit Healthcare Platform",
    description: "Comprehensive healthcare management solution with advanced AI-powered features for patient care and hospital operations.",
    detailedDescription: "Adamrit is a next-generation healthcare management platform designed to revolutionize hospital operations and patient care delivery. The platform integrates cutting-edge AI technologies to streamline workflows, enhance decision-making, and improve patient outcomes.",
    category: "Healthcare",
    tags: ["AI-Powered", "Healthcare", "Patient Management"],
    aiFeatures: [
      "AI-powered patient diagnostics support",
      "Intelligent appointment scheduling and optimization",
      "Predictive analytics for patient outcomes",
      "Automated medical records processing",
      "Smart resource allocation and management",
    ],
    keyFeatures: [
      "Electronic Health Records (EHR) management",
      "Real-time patient monitoring dashboard",
      "Integrated billing and insurance processing",
      "Multi-facility management support",
      "Secure telemedicine capabilities",
      "Laboratory and pharmacy integration",
    ],
    technologies: ["React", "Node.js", "AI/ML", "Cloud Infrastructure"],
    websiteUrl: "https://adamrit.com",
    image: "/adamrit-screenshot.gif",
    date: "2025",
    featured: true,
  },
  {
    id: 2,
    title: "Linkist - Personal Relationship Manager",
    description: "AI-powered networking platform combining premium NFC business cards with intelligent contact management for intentional relationship building.",
    detailedDescription: "Linkist is a revolutionary Personal Relationship Manager (PRM™) that transforms how professionals build and maintain business relationships. The platform combines premium NFC-enabled business cards with AI-powered contact management software, helping users remember better and network with intention.",
    category: "Business",
    tags: ["AI-Powered", "Networking", "NFC Technology"],
    aiFeatures: [
      "AI Nudges & Smart Recall for timely outreach reminders",
      "AI-powered ICP Scoring to match contacts against ideal customer profiles",
      "AI Analytics for smart relationship building insights",
      "Intelligent engagement tracking and predictions",
      "Context-aware contact search and surfacing",
      "AI-driven lead capture with 80% improvement rate",
    ],
    keyFeatures: [
      "Premium NFC business cards (metal, wood, or PVC options)",
      "Digital contact profiles with unique URLs",
      "Centralized network management system",
      "Real-time engagement tracking (views, clicks, replies)",
      "Organization-wide contact intelligence",
      "Multi-SSO authentication and fast import",
      "Mobile-optimized digital profiles",
      "QR code and NFC-based sharing",
    ],
    technologies: ["NFC Technology", "AI/ML", "Cloud Infrastructure", "Mobile-First Design"],
    websiteUrl: "https://linkist.2men.co",
    image: "/linkist-screenshot.gif",
    date: "2025",
    featured: true,
  },
  {
    id: 3,
    title: "RSeva Health - Comprehensive Healthcare Solutions",
    description: "AI-powered healthcare platform providing end-to-end patient care management, telemedicine services, and intelligent health monitoring for modern healthcare delivery.",
    detailedDescription: "RSeva Health is an innovative healthcare platform that combines AI technology with comprehensive patient care services. The platform enables healthcare providers to deliver efficient, personalized care through intelligent automation, real-time monitoring, and seamless coordination across the healthcare ecosystem.",
    category: "Healthcare",
    tags: ["AI-Powered", "Healthcare", "Telemedicine"],
    aiFeatures: [
      "AI-powered symptom analysis and triage",
      "Intelligent health monitoring and alerts",
      "Predictive analytics for disease prevention",
      "Automated appointment scheduling with smart recommendations",
      "AI-driven medication management and reminders",
      "Smart health insights and personalized care plans",
    ],
    keyFeatures: [
      "Comprehensive patient management system",
      "Integrated telemedicine and video consultation",
      "Electronic health records (EHR) management",
      "Real-time health monitoring and tracking",
      "Multi-provider coordination platform",
      "Prescription and medication management",
      "Health analytics and reporting dashboard",
      "Mobile app for patients and providers",
    ],
    technologies: ["Healthcare AI", "Cloud Platform", "Mobile Technology", "Data Security"],
    websiteUrl: "https://www.rseva.health",
    date: "2025",
    featured: false,
  },
  {
    id: 4,
    title: "Pulse of People - Voter Sentiment Dashboard",
    description: "Advanced voter sentiment analysis platform, providing real-time insights into public opinion and electoral preferences through interactive data visualizations.",
    detailedDescription: "Pulse of People is a sophisticated voter sentiment analysis dashboard developed by BETTROI that tracks and visualizes public opinion related to voting behaviors and electoral preferences. The platform leverages advanced data visualization techniques to provide political analysts, campaign strategists, and researchers with real-time insights into voter sentiment, helping them understand the pulse of democratic participation.",
    category: "Business",
    tags: ["Data Analytics", "Political Analysis", "Voter Sentiment"],
    aiFeatures: [
      "AI-powered sentiment analysis of voter opinions",
      "Real-time data processing and visualization",
      "Predictive analytics for electoral trends",
      "Automated sentiment classification and scoring",
      "Pattern recognition in voter behavior",
      "Intelligent trend detection and alerting",
    ],
    keyFeatures: [
      "Interactive data visualization dashboard",
      "Real-time voter sentiment tracking",
      "Comprehensive charting and graphing tools",
      "Political opinion trend analysis",
      "Electoral preference monitoring",
      "Customizable data views and filters",
      "Export and reporting capabilities",
      "Responsive web interface for all devices",
    ],
    technologies: ["Data Visualization", "Web Dashboard", "Analytics Platform", "Chart Libraries"],
    websiteUrl: "https://tvk.pulseofpeople.com",
    date: "2025",
    featured: true,
  },
  {
    id: 5,
    title: "PulseOfProject - Real-Time Project Tracking",
    description: "AI-powered real-time project management platform that provides instant visibility into project status, team performance, and milestone tracking.",
    detailedDescription: "PulseOfProject is a next-generation project management platform designed to give teams real-time visibility into their projects. Powered by advanced AI and analytics, it transforms how organizations track progress, manage resources, and deliver projects on time.",
    category: "Business",
    tags: ["AI-Powered", "Project Management", "Real-Time Tracking"],
    aiFeatures: [
      "AI-powered predictive analytics for project timelines",
      "Intelligent resource allocation and optimization",
      "Automated risk detection and mitigation suggestions",
      "Smart milestone tracking with progress predictions",
      "AI-driven insights and recommendations",
      "Automated status reporting and updates",
    ],
    keyFeatures: [
      "Real-time project dashboard with live updates",
      "Interactive Gantt charts and timeline views",
      "Team collaboration and communication tools",
      "Task dependencies and critical path analysis",
      "Customizable project templates",
      "Time tracking and resource management",
      "Budget tracking and financial reporting",
      "Mobile app for on-the-go project monitoring",
    ],
    technologies: ["Real-Time Analytics", "AI/ML", "Cloud Platform", "Mobile-First"],
    websiteUrl: "https://pulseofproject.com",
    image: "/pulseofproject.gif",
    date: "2025",
    featured: false,
  },
  {
    id: 6,
    title: "Proposify AI - Intelligent Proposal Management",
    description: "AI-powered proposal management platform that automates content generation, pricing optimization, and client research for faster proposal creation.",
    detailedDescription: "Proposify AI is a modern proposal management platform that leverages artificial intelligence to streamline the entire proposal creation workflow. The platform helps sales teams create professional, data-driven proposals with intelligent automation and smart recommendations.",
    category: "Business",
    tags: ["AI-Powered", "Sales Automation", "Proposal Management"],
    aiFeatures: [
      "AI-powered content generation with contextual writing",
      "Intelligent pricing recommendations and optimization",
      "Automated prospect research and intelligence gathering",
      "Smart proposal templates with dynamic content",
      "AI-driven analytics and insights",
      "Automated compliance and legal review",
    ],
    keyFeatures: [
      "Template-based proposal creation",
      "CRM integration capabilities",
      "E-signature and document tracking",
      "Collaborative editing and review workflows",
      "Customizable branding and design",
      "Proposal performance analytics",
      "Multi-language support",
      "Secure document management",
    ],
    technologies: ["Next.js", "TypeScript", "AI/ML", "Cloud Platform"],
    websiteUrl: "https://www.proposifyai.com",
    image: "/Raftaar.gif",
    date: "2025",
    featured: true,
  },
  {
    id: 7,
    title: "AI Surgeon Pilot - Intelligent Surgical Assistant",
    description: "Advanced AI-powered surgical assistance platform that provides real-time guidance, predictive analytics, and decision support for enhanced surgical outcomes.",
    detailedDescription: "AI Surgeon Pilot is a cutting-edge medical AI platform designed to assist surgeons with intelligent decision support, real-time guidance, and predictive analytics. The platform enhances surgical precision, improves patient safety, and optimizes surgical workflows through advanced artificial intelligence.",
    category: "Healthcare",
    tags: ["AI-Powered", "Medical AI", "Surgical Technology"],
    aiFeatures: [
      "AI-powered surgical planning and simulation",
      "Real-time surgical guidance and decision support",
      "Intelligent medical image analysis and recognition",
      "Predictive analytics for complication detection",
      "AI-driven surgical workflow optimization",
      "Machine learning-based outcome predictions",
    ],
    keyFeatures: [
      "Pre-operative planning and visualization tools",
      "Intraoperative real-time guidance systems",
      "Post-operative monitoring and analytics",
      "Integration with surgical robotics and devices",
      "Surgical video analysis and documentation",
      "Evidence-based clinical decision support",
      "Compliance with medical standards (HIPAA, FDA)",
      "Surgeon training and education modules",
    ],
    technologies: ["Medical AI", "Computer Vision", "Deep Learning", "Cloud Infrastructure"],
    websiteUrl: "https://www.aisurgeonpilot.com",
    date: "2025",
    featured: false,
  },
  {
    id: 8,
    title: "StyleMy.Hair - Virtual Hairstyle Try-On",
    description: "AI-powered virtual hairstyle platform that lets users preview different hairstyles digitally before making styling decisions.",
    detailedDescription: "StyleMy.Hair is an innovative virtual try-on platform powered by Google's Generative AI that revolutionizes the hair styling experience. The platform enables users to experiment with different hairstyles digitally, reducing uncertainty and helping them make confident styling choices before visiting a salon.",
    category: "Beauty",
    tags: ["AI-Powered", "Virtual Try-On", "Beauty Tech"],
    aiFeatures: [
      "Google Generative AI-powered hairstyle simulation",
      "AI-driven realistic hair rendering and visualization",
      "Intelligent style recommendations based on face shape",
      "Smart hair color and texture simulation",
      "Personalized styling suggestions",
      "AI-enhanced photo processing for accurate try-on",
    ],
    keyFeatures: [
      "Virtual hairstyle try-on with real-time preview",
      "Multiple hairstyle options and variations",
      "Color and texture customization",
      "Face shape analysis and recommendations",
      "Save and compare different looks",
      "Share styles with stylists or friends",
      "Mobile-optimized experience",
      "User-friendly interface for easy navigation",
    ],
    technologies: ["React", "Google Generative AI", "Supabase", "React Router"],
    websiteUrl: "https://stylemy.hair",
    date: "2025",
    featured: false,
  },
  {
    id: 9,
    title: "PreWed AI - AI-Powered Pre-Wedding Photography",
    description: "Revolutionary AI platform that creates stunning pre-wedding photos and helps couples visualize their perfect wedding look without expensive photoshoots.",
    detailedDescription: "PreWed AI transforms the pre-wedding photography experience by leveraging advanced AI image generation technology. Couples can create beautiful, personalized pre-wedding photos in any location, style, or theme they imagine - all without leaving home or hiring expensive photographers.",
    category: "Wedding",
    tags: ["AI-Powered", "Photography", "Wedding Tech"],
    aiFeatures: [
      "AI-powered photo generation from uploaded couple photos",
      "Intelligent scene and background customization",
      "Smart outfit and styling recommendations",
      "AI-enhanced photo retouching and beautification",
      "Personalized theme and mood suggestions",
      "Advanced facial recognition and pose generation",
    ],
    keyFeatures: [
      "Upload photos and generate AI pre-wedding shots",
      "Multiple destination and backdrop options",
      "Customizable themes, outfits, and colors",
      "Instant photo generation and previews",
      "High-resolution output for printing",
      "Save and share galleries with family and friends",
      "Affordable alternative to traditional photoshoots",
      "Easy-to-use interface for non-technical users",
    ],
    technologies: ["AI Image Generation", "Deep Learning", "Computer Vision", "Cloud Processing"],
    websiteUrl: "https://prewedai.com",
    image: "/prewedai.gif",
    date: "2025",
    featured: false,
  },
  {
    id: 10,
    title: "AI-Shu - Photorealistic AI Tutor",
    description: "Intelligent AI-powered tutoring platform featuring photorealistic AI tutors that provide personalized education across multiple subjects with real-time adaptive learning.",
    detailedDescription: "AI-Shu is a revolutionary educational platform featuring photorealistic AI tutors that deliver personalized instruction across multiple subjects. Built on the proven Three-C Model (Curiosity → Clarity → Confidence), the platform adapts teaching approaches in real-time based on emotional recognition and learning styles, supporting students preparing for IB, A-Level, AP, and IGCSE examinations.",
    category: "Education",
    tags: ["AI-Powered", "Education", "Adaptive Learning"],
    aiFeatures: [
      "Photorealistic AI tutor with human-like interaction",
      "Real-time emotional and learning style recognition",
      "Adaptive teaching for different learner profiles (anxious, advanced, distracted, struggling)",
      "AI-powered Socratic questioning methodology",
      "Personalized pace adjustment based on student needs",
      "Intelligent progress tracking with mastery analytics",
    ],
    keyFeatures: [
      "Six-step learning journey framework (Connect, Conceptualize, Explore, Apply, Evaluate, Reflect)",
      "Curriculum-aligned content for IB, A-Level, AP, and IGCSE",
      "24/7 availability for student support",
      "Detailed progress tracking and mastery reports",
      "Mark scheme awareness and exam technique coaching",
      "Multi-subject support (Physics, Chemistry, Math, Business, Economics)",
      "Non-judgmental learning environment",
      "Free tier available with quick setup",
    ],
    technologies: ["Next.js", "AI/ML", "Emotional Recognition", "Adaptive Learning"],
    websiteUrl: "https://ai-shu.vercel.app",
    date: "2025",
    featured: true,
  },
  {
    id: 11,
    title: "Headz - AI Virtual Hair Try-On",
    description: "Advanced virtual hair try-on application with AI-powered facial detection that lets users preview professional hairstyles and book appointments with hair professionals.",
    detailedDescription: "Headz is a cutting-edge virtual hair try-on web application that combines AI-powered facial detection with real-time hairstyle overlay technology. Users can upload their photos, browse nine professional hairstyle options, save favorites, and seamlessly book appointments with hair professionals—all within an intuitive platform.",
    category: "Beauty",
    tags: ["AI-Powered", "Virtual Try-On", "Beauty Tech"],
    aiFeatures: [
      "AI-powered facial detection using TensorFlow.js",
      "Real-time face recognition with MediaPipe integration",
      "Intelligent hairstyle positioning and alignment",
      "Automated hair overlay rendering",
      "Smart facial landmark detection",
      "AI-enhanced photo processing for accurate visualization",
    ],
    keyFeatures: [
      "Upload photos and preview nine professional hairstyles",
      "Save favorite hairstyle combinations",
      "Book appointments with hair professionals",
      "Real-time hairstyle overlay technology",
      "User authentication with JWT",
      "Cloud storage integration (AWS S3/Cloudinary)",
      "Responsive design for mobile and desktop",
      "Professional hairstyle library from Unsplash",
    ],
    technologies: ["React", "TypeScript", "TensorFlow.js", "MediaPipe", "Django REST", "Tailwind CSS"],
    date: "2025",
    featured: false,
  },
  {
    id: 12,
    title: "Hospiview - Hospital Management System",
    description: "Comprehensive hospital management platform with real-time bed tracking, patient admissions monitoring, and role-based access for efficient healthcare operations.",
    detailedDescription: "Hospiview is a modern hospital management system designed to streamline healthcare facility operations. With real-time dashboards, bed capacity tracking, and comprehensive patient management features, it provides healthcare administrators with complete visibility and control over hospital resources.",
    category: "Healthcare",
    tags: ["Hospital Management", "Healthcare", "Real-Time Tracking"],
    aiFeatures: [],
    keyFeatures: [
      "Real-time hospital status dashboard",
      "Bed capacity tracking and occupancy monitoring",
      "Patient admissions and data entry system",
      "Role-based access control (admin, staff)",
      "Enhanced reporting and analytics",
      "Resource management and allocation",
      "Multi-facility support capabilities",
      "Comprehensive audit trails",
    ],
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vite"],
    websiteUrl: "https://hospiview-app.vercel.app",
    date: "2025",
    featured: false,
  },
  {
    id: 13,
    title: "Neuro360 - EEG Report Management Platform",
    description: "Comprehensive SaaS platform for managing EEG reports, clinic onboarding, and neurological test data with subscription-based monetization.",
    detailedDescription: "Neuro360 is a specialized healthcare SaaS platform designed for managing electroencephalogram (EEG) reports and neurological test data. The platform features dual-interface architecture with a super admin dashboard and clinic-specific portals, enabling seamless management of patient reports, subscription tracking, and clinic operations.",
    category: "Healthcare",
    tags: ["Healthcare", "SaaS", "Neurology"],
    aiFeatures: [],
    keyFeatures: [
      "Comprehensive EEG report management system",
      "Dual-interface: super admin and clinic portals",
      "Clinic onboarding and management",
      "Patient report access and distribution",
      "Subscription-based monetization (Stripe, Razorpay)",
      "Usage tracking and analytics",
      "Multi-clinic support architecture",
      "Cloud storage with AWS S3 integration",
    ],
    technologies: ["React", "Vite", "Node.js", "Supabase", "DynamoDB", "AWS", "Stripe", "Razorpay"],
    date: "2025",
    featured: false,
  },
  {
    id: 14,
    title: "Voice Agent App - AI Voice Conversations",
    description: "Mobile application enabling natural voice-based conversations with AI agents, featuring real-time speech recognition and text-to-speech synthesis.",
    detailedDescription: "Voice Agent App is a React Native mobile application that provides seamless voice-based interaction with ElevenLabs conversational AI agents. The app captures spoken input, processes it through conversational AI, and delivers natural-sounding voice responses, enabling hands-free AI communication across iOS and Android devices.",
    category: "AI Technology",
    tags: ["AI-Powered", "Voice AI", "Mobile App"],
    aiFeatures: [
      "Real-time speech-to-text conversion using native device capabilities",
      "Integration with ElevenLabs conversational AI agents",
      "Natural text-to-speech synthesis for AI responses",
      "Persistent chat history with timestamps",
      "Context-aware conversation management",
      "Cross-platform voice processing (iOS/Android)",
    ],
    keyFeatures: [
      "Hands-free voice interaction with AI",
      "Real-time audio processing",
      "Native speech recognition integration",
      "Audio playback of AI responses",
      "Conversation history and management",
      "Permissions management for microphone access",
      "Cross-platform mobile support",
      "TypeScript for type-safe development",
    ],
    technologies: ["React Native", "TypeScript", "ElevenLabs AI", "Speech Recognition", "Text-to-Speech"],
    date: "2025",
    featured: false,
  },
  {
    id: 15,
    title: "ORMA - AI Studio Platform",
    description: "Comprehensive AI Studio application for running and deploying AI-powered apps with Google Gemini integration and cloud infrastructure.",
    detailedDescription: "ORMA is an AI Studio platform that facilitates rapid development and deployment of AI-powered applications. Built with modern frameworks and integrated with Google Gemini AI, it provides a pre-configured template combining frontend frameworks, cloud infrastructure, and AI capabilities for developers.",
    category: "AI Technology",
    tags: ["AI-Powered", "Development Platform", "AI Studio"],
    aiFeatures: [
      "Google Gemini AI integration",
      "AI-powered application templates",
      "Intelligent development workflow",
      "AI capability deployment tools",
      "Cloud-based AI infrastructure",
      "Rapid AI app prototyping",
    ],
    keyFeatures: [
      "Local development environment setup",
      "Cloud deployment to Vercel",
      "Supabase PostgreSQL integration",
      "Modern React/TypeScript frontend",
      "Tailwind CSS styling framework",
      "Vite build tooling",
      "Comprehensive setup documentation",
      "Multi-contributor support",
    ],
    technologies: ["React", "TypeScript", "Google Gemini", "Supabase", "Vercel", "Tailwind CSS"],
    websiteUrl: "https://orma-main-kyac.vercel.app",
    date: "2025",
    featured: false,
  },
  {
    id: 16,
    title: "HealthPlus - Clinic Management App",
    description: "Mobile clinic management application streamlining appointment scheduling and patient-doctor interactions with role-based access control.",
    detailedDescription: "HealthPlus is a React Native mobile application designed to streamline healthcare facility operations. The app automates appointment management, enables secure role-based access for doctors and patients, and centralizes patient-doctor scheduling through an intuitive mobile interface powered by Firebase.",
    category: "Healthcare",
    tags: ["Mobile App", "Healthcare", "Appointment Management"],
    aiFeatures: [],
    keyFeatures: [
      "User authentication system",
      "Role-based access (doctors and patients)",
      "Appointment booking with doctor mapping",
      "User profile creation and editing",
      "Firebase real-time database integration",
      "Redux state management",
      "Cross-platform mobile support (iOS/Android)",
      "Secure patient data handling",
    ],
    technologies: ["React Native", "Expo", "Firebase", "Redux", "JavaScript"],
    date: "2025",
    featured: false,
  },
  {
    id: 17,
    title: "Clinivoice - AI Voice Agent Platform",
    description: "Enterprise SaaS platform for managing organizations and AI voice agents with native Hindi/Hinglish support for healthcare applications.",
    detailedDescription: "Clinivoice (DrM Hope SaaS Platform) is a comprehensive enterprise management system designed for healthcare organizations. The platform features multi-tenant architecture with Hindi/Hinglish AI voice agent integration, call logging, analytics, and enterprise-grade security with data isolation.",
    category: "Healthcare",
    tags: ["AI-Powered", "Voice AI", "Healthcare SaaS"],
    aiFeatures: [
      "Hindi/Hinglish AI voice agent integration",
      "Voice agent management interface",
      "Call logging and analytics",
      "AI-powered conversation handling",
      "Natural language processing for Hindi/Hinglish",
      "Intelligent call routing and management",
    ],
    keyFeatures: [
      "Multi-tenant architecture",
      "Role-based access control",
      "Organizational data management",
      "JWT authentication via Supabase",
      "Row Level Security policies",
      "Enterprise-grade data isolation",
      "RESTful API architecture",
      "Comprehensive user management",
    ],
    technologies: ["Flask", "Python", "Supabase", "PostgreSQL", "AI Voice Technology"],
    date: "2025",
    featured: false,
  },
  {
    id: 18,
    title: "NABH - Healthcare Quality Management",
    description: "Comprehensive platform for managing medical diagnoses, complications, and investigations with role-based access for healthcare quality assurance.",
    detailedDescription: "NABH Platform is a healthcare management system designed to streamline medical data organization in hospital settings. It provides structured organization of diagnoses, complications, and related investigations with proper access controls for quality managers, department heads, and administrators.",
    category: "Healthcare",
    tags: ["Healthcare", "Quality Management", "Medical Records"],
    aiFeatures: [],
    keyFeatures: [
      "Medical diagnosis management",
      "Complication tracking linked to diagnoses",
      "Laboratory and radiology investigation organization",
      "Medication association management",
      "Role-based access (Admin, Quality Manager, Department Head)",
      "PostgreSQL database with Redis caching",
      "Docker containerization",
      "JWT-based security",
    ],
    technologies: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    date: "2025",
    featured: false,
  },
  {
    id: 19,
    title: "Limitless Brain Wellness (LBW)",
    description: "Comprehensive brain wellness platform providing science-backed personalized programs for ADHD support, memory enhancement, mood regulation, and stress management.",
    detailedDescription: "Limitless Brain Wellness is a digital health platform focused on brain health optimization with the philosophy 'You're not broken. You're becoming limitless.' The platform offers personalized onboarding pathways, evidence-based assessments, daily personalized content, and progress tracking with brain fitness scoring.",
    category: "Healthcare",
    tags: ["Mental Health", "Wellness", "Personalized Care"],
    aiFeatures: [
      "AI-powered chatbot for user support (planned)",
      "Personalized content recommendations",
      "Intelligent progress tracking",
      "Adaptive wellness programs",
    ],
    keyFeatures: [
      "Personalized onboarding (ADHD, memory, stress management)",
      "Evidence-based assessments (ADHD Rating Scale, GAD-7, PSS-10)",
      "Daily personalized content (exercises, nutrition, breathwork)",
      "Progress tracking with brain fitness scoring",
      "Mood and stress management tools",
      "Memory enhancement programs",
      "Visual analytics with Recharts",
      "Mobile-optimized responsive design",
    ],
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "TanStack Query"],
    date: "2025",
    featured: false,
  },
]

const categories = ["All", "Healthcare", "Business", "Beauty", "Finance", "Wedding", "Education", "AI Technology"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleLearnMore = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-50 dark:from-gray-950 dark:to-red-950/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-red-700 dark:text-red-300">
            Our Projects
          </h1>
          <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
            Explore our portfolio of successful software solutions delivered across various industries
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "border-red-300 dark:border-red-700 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-950"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col border-red-100 dark:border-red-900 hover:shadow-lg transition-shadow relative overflow-hidden"
              style={{
                backgroundImage: project.image ? `url(${project.image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay for better text readability when background image is present */}
              {project.image && (
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95 dark:from-gray-900/5 dark:via-gray-900/85 dark:to-gray-900/95" />
              )}
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-red-700 dark:text-red-300">{project.title}</CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Tag className="h-4 w-4 mt-1 text-gray-600 dark:text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-red-200 dark:border-red-800 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 relative z-10">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-red-300 dark:border-red-700"
                  onClick={() => handleLearnMore(project)}
                >
                  Learn More
                </Button>
                {project.websiteUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                    asChild
                  >
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Site
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-red-100 dark:border-red-900">
          <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our custom software solutions.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
            <a href="/contact">Get Started</a>
          </Button>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <DialogTitle className="text-2xl md:text-3xl text-red-700 dark:text-red-300 mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                        {selectedProject.category}
                      </Badge>
                      {selectedProject.featured && (
                        <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300">
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline" className="border-red-300 dark:border-red-700">
                        <Calendar className="mr-1 h-3 w-3" />
                        {selectedProject.date}
                      </Badge>
                    </div>
                  </div>
                </div>
                <DialogDescription className="text-base text-gray-700 dark:text-gray-300">
                  {selectedProject.detailedDescription || selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* AI Features */}
                {selectedProject.aiFeatures && selectedProject.aiFeatures.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <h3 className="text-xl font-semibold text-red-700 dark:text-red-300">AI-Powered Features</h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.aiFeatures.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300 bg-red-50 dark:bg-red-950/30 p-3 rounded-md"
                        >
                          <Sparkles className="h-4 w-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Features */}
                {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
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
                )}

                {/* Tags */}
                <div>
                  <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {selectedProject.websiteUrl && (
                    <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
                      <a href={selectedProject.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Website
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" className="border-red-300 dark:border-red-700" asChild>
                    <a href="/contact">
                      Get Similar Solution
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
