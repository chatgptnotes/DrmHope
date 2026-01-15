import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Bot, Phone, Mail, MessageCircle, Workflow, Sparkles, Clock, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: 'AI Agentic Platforms | Intelligent AI Agent Development & Automation',
  description: 'Build powerful AI agentic platforms with intelligent autonomous agents. Voice AI, chatbots, workflow automation, and multi-agent systems. Transform business operations with AI agents.',
  keywords: [
    'AI agentic platforms',
    'AI agentic software',
    'AI agent platforms',
    'AI agents development',
    'autonomous AI agents',
    'intelligent agents',
    'AI workflow automation',
    'voice AI agents',
    'AI chatbot platforms',
    'multi-agent systems',
    'AI automation platforms'
  ],
  openGraph: {
    title: 'AI Agentic Platforms | Intelligent AI Agent Development',
    description: 'Build autonomous AI agents for voice, chat, workflow automation, and intelligent business processes',
    type: 'website',
  }
}

export default function AIAgenticPlatforms() {
  const agentTypes = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Voice AI Agents",
      description: "Intelligent voice agents for automated calling, customer support, appointment scheduling, and natural conversations.",
      examples: ["BhashAI", "Raftaar Emergency AI"]
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "AI Chatbot Agents",
      description: "Advanced conversational AI agents with NLP, context awareness, and multi-turn dialogue capabilities.",
      examples: ["Customer Support", "Virtual Assistants"]
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Sales AI Agents (SDR)",
      description: "Automated sales development representatives for outreach, lead qualification, and email campaigns.",
      examples: ["AutoAISale", "AgentSDR"]
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Workflow AI Agents",
      description: "Intelligent agents that automate complex business processes, data entry, and operational workflows.",
      examples: ["Document Processing", "Data Automation"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Multi-Agent Systems",
      description: "Coordinated AI agent teams that collaborate to solve complex problems and handle sophisticated tasks.",
      examples: ["Agent Orchestration", "Swarm Intelligence"]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Generative AI Agents",
      description: "AI agents powered by LLMs for content generation, code writing, analysis, and creative tasks.",
      examples: ["Content Agents", "Code Assistants"]
    }
  ]

  const capabilities = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Autonomous Operation",
      description: "AI agents that work round the clock without supervision"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Continuous Learning",
      description: "Agents that improve from interactions and feedback"
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Multi-Task Execution",
      description: "Handle multiple tasks simultaneously with intelligence"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Natural Language Understanding",
      description: "Human-like comprehension and communication"
    }
  ]

  const useCases = [
    "Customer Service Automation",
    "Sales & Lead Generation",
    "Appointment Scheduling",
    "Data Entry & Processing",
    "Email & Communication Management",
    "Research & Information Gathering",
    "Content Creation & Curation",
    "Workflow Orchestration",
    "Quality Assurance & Testing",
    "Analytics & Reporting"
  ]

  const frameworks = [
    "LangChain", "AutoGen", "CrewAI", "LlamaIndex",
    "Semantic Kernel", "GPT-4", "Claude", "Gemini",
    "Bolna AI", "Vapi", "Retell AI", "ElevenLabs"
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-2 w-fit mx-auto px-4 py-2">
                <Bot className="h-4 w-4" />
                AI Agentic Platforms
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Build Intelligent
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                  AI Agent Platforms
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Develop autonomous AI agents that automate workflows, handle customer interactions, and execute complex tasks.
                Transform your business with intelligent AI agentic systems powered by LLMs and advanced AI frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Build Your AI Agent
                </Button>
                <Button size="lg" variant="outline">
                  Explore Agent Examples
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { number: "50+", label: "AI Agents Deployed" },
                { number: "10x", label: "Faster Operations" },
                { number: "95%", label: "Task Accuracy" },
                { number: "24/7", label: "Uptime" }
              ].map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Types */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Types of AI Agents We Build
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI agent development for every business need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agentTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 text-purple-600 dark:text-purple-400">
                      {type.icon}
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {type.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                AI Agent Capabilities
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-4">
                    <div className="text-purple-600 dark:text-purple-400">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                AI Agent Use Cases
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Real-world applications across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                AI Agent Frameworks & Tools
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {frameworks.map((framework, index) => (
                <Badge key={index} variant="outline" className="text-base py-2 px-4">
                  {framework}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your AI Agent Platform?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create intelligent AI agents that automate your workflows and transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Agent Demos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
