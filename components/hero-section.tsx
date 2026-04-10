"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-cards"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
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
      className="relative flex items-center justify-center overflow-x-hidden py-6 sm:py-8 lg:py-8 hero-gradient min-h-[calc(100svh-80px)]"
    >
      {/* Lightweight CSS Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-particles" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        {/* Left Content */}
        <div className="max-w-xl lg:max-w-none text-center lg:text-left order-2 lg:order-1 flex flex-col gap-2.5 sm:gap-3">
          <div className="inline-block self-center lg:self-start px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white text-xs sm:text-sm font-medium tracking-wide">DrM Hope - Better Technology</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.45rem] xl:text-[2.7rem] font-bold text-white leading-[1.15] tracking-tight">
            AI Driven Software Development{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              & Technical Consulting
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-200 leading-relaxed max-w-xl lg:max-w-none">
            We leverage <strong>AI services</strong> and advanced <strong>intelligent automation</strong> to align technology with your business goals — seamless adoption, enhanced experiences, and sustained growth.
          </p>

          <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15">
            <p className="text-white text-xs sm:text-sm leading-relaxed">
              <strong>Technology Partner of Bettroi</strong> — Founded by <strong>Dr. Murali BK</strong>, CTO of Bettroi. 100+ successful AI projects delivered.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-md text-white/90 border border-white/15 text-xs font-medium">
              Machine Learning
            </div>
            <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-md text-white/90 border border-white/15 text-xs font-medium">
              NLP & LLMs
            </div>
            <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-md text-white/90 border border-white/15 text-xs font-medium">
              Computer Vision
            </div>
            <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-md text-white/90 border border-white/15 text-xs font-medium">
              AI Agents
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start pt-1">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-7 py-2.5 text-sm sm:text-base font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_28px_rgba(99,102,241,0.55)] border-0"
            >
              <Link href="/solutions">
                Explore AI Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/15 border-2 border-white hover:bg-white hover:text-gray-900 text-white px-7 py-2.5 text-sm sm:text-base font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(255,255,255,0.12)] hover:shadow-[0_6px_28px_rgba(255,255,255,0.25)]"
            >
              <Link href="/projects">
                View AI Projects
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Slider */}
        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 order-1 lg:order-2 flex items-center justify-center lg:justify-end">
          <div className="w-full lg:w-[430px] xl:w-[480px]">
            {mounted ? <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="w-full h-[210px] sm:h-[250px] md:h-[300px] lg:h-[380px] xl:h-[430px]"
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              cardsEffect={{
                perSlideOffset: 8,
                perSlideRotate: 2,
                rotate: true,
                slideShadows: false,
              }}
            >
              {industries.map((industry, index) => (
                <SwiperSlide
                  key={index}
                  className="rounded-2xl border border-white/25 overflow-hidden shadow-2xl"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 440px"
                      className="object-cover object-center"
                      priority={index === 0}
                    />

                    {/* Badge */}
                    <div
                      className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold glass-light ${index < 2 ? 'text-white' : 'text-gray-800'}`}
                    >
                      Enterprise Ready
                    </div>

                    {/* Overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 pb-5 flex flex-col justify-end rounded-b-2xl border-t border-white/20 glass-overlay bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                        {industry.title}
                      </h3>
                      <p className="text-xs text-white/85 leading-snug line-clamp-2">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> : <div className="w-full h-[210px] sm:h-[250px] md:h-[300px] lg:h-[380px] xl:h-[430px] rounded-2xl bg-white/10 animate-pulse" />}
          </div>
        </div>
      </div>
    </section>
  )
}
