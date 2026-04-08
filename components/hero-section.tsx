"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-cards"

export function HeroSection() {
  const industries = [
    {
      title: "AI-Powered Healthcare",
      description: "AI-driven Hospital Information Systems, NLP medical records, and predictive diagnostics transforming patient care.",
      image: "/caring-doctor.png",
      color: "#FD5F07"
    },
    {
      title: "AI Agentic Platforms",
      description: "Intelligent AI agents for automation, voice AI systems, and AI-powered sales platforms.",
      image: "/images/analytics-dashboard.jpg",
      color: "#009CB3"
    },
    {
      title: "Machine Learning Solutions",
      description: "Computer vision, NLP, predictive analytics, and deep learning platforms for enterprise AI.",
      image: "/images/hero-dashboard.jpg",
      color: "#6f7aa6"
    },
    {
      title: "Generative AI Platforms",
      description: "AI software development with LLMs, AI chatbots, and intelligent automation systems.",
      image: "/images/mobile-app.jpg",
      color: "#FD5F07"
    },
  ]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden py-20 px-4 sm:px-6 md:px-8 lg:px-16 hero-gradient"
    >
      {/* Lightweight CSS Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-particles" />
      </div>

      {/* Content Grid */}
      <div className="container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center max-w-7xl">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block mb-6 px-6 py-3 bg-white/20 rounded-full border border-white/20">
            <span className="text-white text-base font-medium">DrM Hope - Better Technology</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            AI Driven Software Development{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              & Technical Consulting
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            We leverage <strong>AI services</strong> and advanced <strong>intelligent automation</strong> to align technology with your business goals. Our solutions ensure seamless adoption, enhanced customer experiences, and sustained growth in a fast-changing market.
          </p>

          <div className="mb-8 p-6 bg-white/20 rounded-xl border border-white/20">
            <p className="text-white text-lg">
              <strong>Technology Partner of Bettroi</strong> - Founded by <strong>Dr. Murali BK</strong>, CTO of Bettroi. 100+ successful AI projects delivered.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start mb-8">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/20 rounded-lg text-white/90 border border-white/20">
              <span className="text-sm font-medium">Machine Learning</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/20 rounded-lg text-white/90 border border-white/20">
              <span className="text-sm font-medium">NLP & LLMs</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/20 rounded-lg text-white/90 border border-white/20">
              <span className="text-sm font-medium">Computer Vision</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/20 rounded-lg text-white/90 border border-white/20">
              <span className="text-sm font-medium">AI Agents</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg border-0"
            >
              <Link href="/solutions">
                Explore AI Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/20 border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link href="/projects">
                View AI Projects
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Slider */}
        <div className="relative w-full max-w-md mx-auto lg:mx-0 order-1 lg:order-2">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[490px]"
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            loop={true}
          >
            {industries.map((industry, index) => (
              <SwiperSlide
                key={index}
                className="rounded-[20px] border border-white/30 overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                    priority={index === 0}
                  />

                  {/* Cost Badge */}
                  <div
                    className={`absolute top-2 right-2 px-3 py-1.5 rounded-full text-sm font-semibold glass-light ${index < 2 ? 'text-white' : 'text-gray-800'}`}
                  >
                    Enterprise Ready
                  </div>

                  {/* Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 h-[120px] sm:h-[150px] flex flex-col justify-center rounded-b-[20px] border-t border-white/30 glass-overlay"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-snug line-clamp-3">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
