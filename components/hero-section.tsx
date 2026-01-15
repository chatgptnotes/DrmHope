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
          <div className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white text-base font-medium">DrM Hope - Better Technology</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            AI Driven Software Development{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              & Technical Consulting
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            We leverage AI Services and advanced automation to align technology with your business goals. Our solutions ensure seamless adoption, enhanced customer experiences, and sustained growth in a fast-changing market.
          </p>

          <div className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-white text-lg">
              <strong>Technology Partner of Bettroi</strong> - Founded by <strong>Dr. Murali BK</strong>, CTO of Bettroi. 100+ successful AI projects delivered.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/90 border border-white/20">
              <span className="text-sm font-medium">Machine Learning</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/90 border border-white/20">
              <span className="text-sm font-medium">NLP & LLMs</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/90 border border-white/20">
              <span className="text-sm font-medium">Computer Vision</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/90 border border-white/20">
              <span className="text-sm font-medium">AI Agents</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg border-0"
            >
              Explore AI Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
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
