"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay } from "swiper/modules"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { ISourceOptions } from "@tsparticles/engine"

import "swiper/css"
import "swiper/css/effect-cards"

export function HeroSection() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  )

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
      image: "/images/pexels-markusspiske-225769.jpg",
      color: "#009CB3"
    },
    {
      title: "Machine Learning Solutions",
      description: "Computer vision, NLP, predictive analytics, and deep learning platforms for enterprise AI.",
      image: "/images/pexels-markusspiske-225769.jpg",
      color: "#6f7aa6"
    },
    {
      title: "Generative AI Platforms",
      description: "AI software development with LLMs, AI chatbots, and intelligent automation systems.",
      image: "/images/pexels-markusspiske-225769.jpg",
      color: "#FD5F07"
    },
  ]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden py-20 px-4 md:px-16"
      style={{
        background: "#0a0a0a",
        backgroundImage: `radial-gradient(
          circle at 20% 100%,
          rgba(184, 184, 184, 0.1) 0%,
          rgba(184, 184, 184, 0.1) 33%,
          rgba(96, 96, 96, 0.1) 33%,
          rgba(96, 96, 96, 0.1) 66%,
          rgba(7, 7, 7, 0.1) 66%,
          rgba(7, 7, 7, 0.1) 99%
        ),
        linear-gradient(40deg, #009CB3, #1a1a1a, #991b1b, #dc2626, #DC143C)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Particles Background */}
      {init && (
        <div className="absolute inset-0">
          <Particles options={particlesOptions} />
        </div>
      )}

      {/* Content Grid */}
      <div className="container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white/90 text-sm font-medium">🤖 Leading AI Software Development Company | 100+ Projects</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Top-Rated{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Software Development
            </span>{" "}
            Company | AI Agentic Platforms
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Award-winning AI software development company founded by <strong className="text-white">Dr. Murali BK</strong>. Specializing in <strong className="text-white">Healthcare AI</strong>, <strong className="text-white">AI Agentic Systems</strong>, <strong className="text-white">Voice AI</strong>, <strong className="text-white">Industrial IoT</strong>, and custom AI solutions. Technology partner of <strong className="text-white">Bettroi</strong>. 100+ successful AI projects delivered.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-2xl">🧠</span>
              <span className="text-sm">Machine Learning</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-2xl">💬</span>
              <span className="text-sm">NLP & LLMs</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-2xl">👁️</span>
              <span className="text-sm">Computer Vision</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-2xl">🤖</span>
              <span className="text-sm">AI Agents</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore AI Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              View AI Projects
            </Button>
          </div>
        </div>

        {/* Right Slider */}
        <div className="relative w-full max-w-md mx-auto lg:mx-0 order-1 lg:order-2">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[490px]"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {industries.map((industry, index) => (
              <SwiperSlide
                key={index}
                className="rounded-[20px] border border-white/30 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${industry.image})` }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Cost Badge */}
                  <div
                    className="absolute top-2 right-2 px-3 py-1.5 rounded-full text-sm font-semibold"
                    style={{
                      background: "rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(6px)",
                      color: index < 2 ? "#fff" : "#202134",
                    }}
                  >
                    Enterprise Ready
                  </div>

                  {/* Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 h-[150px] flex flex-col justify-center rounded-b-[20px] border-t border-white/30"
                    style={{
                      background: "rgba(93, 95, 145, 0.2)",
                      backdropFilter: "blur(20px)",
                    }}
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
