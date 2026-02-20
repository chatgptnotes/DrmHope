"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [exploded, setExploded] = useState(false)
  const [pressedKey, setPressedKey] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      const data = await response.json()

      if (response.status === 200) {
        setSubmitStatus('success')
        // Clear form
        setName("")
        setEmail("")
        setMessage("")

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        console.error('API Error:', data)
        throw new Error(data.error || data.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyPress = (keyId: string) => {
    setPressedKey(keyId)
    setTimeout(() => setPressedKey(null), 200)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in input/textarea
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        // Only allow Enter key to submit when not in textarea
        if (e.key === 'Enter' && target.tagName !== 'TEXTAREA') {
          e.preventDefault()
          handleKeyPress('three')
          const form = document.querySelector('form') as HTMLFormElement
          form?.requestSubmit()
        }
        return
      }

      // Keyboard shortcuts only work when NOT typing in form fields
      if (e.key === 'e' || e.key === 'E') {
        e.preventDefault()
        handleKeyPress('one')
        document.getElementById('email')?.focus()
      }
      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault()
        handleKeyPress('two')
        document.getElementById('message')?.focus()
      }
      if (e.key === 'Enter') {
        e.preventDefault()
        handleKeyPress('three')
        const form = document.querySelector('form') as HTMLFormElement
        form?.requestSubmit()
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'e' || e.key === 'E' || e.key === 'm' || e.key === 'M' || e.key === 'Enter') {
        setPressedKey(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-950 relative overflow-hidden">
      <style jsx>{`
        .keypad {
          position: relative;
          aspect-ratio: 400 / 310;
          display: flex;
          place-items: center;
          width: clamp(280px, 35vw, 400px);
          -webkit-tap-highlight-color: transparent;
          transform-style: preserve-3d;
        }

        .key {
          transform-style: preserve-3d;
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
          outline: none;
        }

        .key[data-pressed='true'] .key__content,
        .key:active .key__content {
          translate: 0 calc(var(--travel, 20) * 1%);
        }

        .key__content {
          width: 100%;
          display: inline-block;
          height: 100%;
          transition: translate 0.12s ease-out;
          container-type: inline-size;
          position: relative;
        }

        .keypad__single .key__text {
          width: 52%;
          height: 62%;
          translate: 45% -16%;
        }

        .key__text {
          height: 46%;
          width: 86%;
          position: absolute;
          font-size: 12cqi;
          z-index: 21;
          top: 5%;
          left: 0;
          color: hsl(0 0% 94%);
          translate: 8% 10%;
          transform: rotateX(36deg) rotateY(45deg) rotateX(-90deg) rotate(0deg);
          text-align: left;
          padding: 1ch;
          font-weight: 600;
        }

        .keypad__single {
          position: absolute;
          width: 40.5%;
          left: 54%;
          bottom: 36%;
          height: 46%;
          clip-path: polygon(
            0 0,
            54% 0,
            89% 24%,
            100% 70%,
            54% 100%,
            46% 100%,
            0 69%,
            12% 23%,
            47% 0%
          );
          mask: url(https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86)
            50% 50% / 100% 100%;
        }

        .keypad__single.keypad__single--left {
          left: 29.3%;
          bottom: 54.2%;
        }

        .keypad__single .key__text {
          font-size: 18cqi;
        }

        .keypad__single img {
          top: 0;
          opacity: 1;
          width: 96%;
          position: absolute;
          left: 50%;
          translate: -50% 1%;
        }

        .key__mask {
          width: 100%;
          height: 100%;
          display: inline-block;
        }

        .keypad__double {
          position: absolute;
          background: transparent;
          width: 64%;
          height: 65%;
          left: 6%;
          bottom: 17.85%;
          clip-path: polygon(
            34% 0,
            93% 44%,
            101% 78%,
            71% 100%,
            66% 100%,
            0 52%,
            0 44%,
            7% 17%,
            30% 0
          );
          mask: url(https://assets.codepen.io/605876/keypad-double.png?format=auto&quality=86)
            50% 50% / 100% 100%;
        }

        .keypad__double img {
          top: 0;
          opacity: 1;
          width: 99%;
          position: absolute;
          left: 50%;
          translate: -50% 1%;
        }

        .key img {
          filter: hue-rotate(calc(var(--hue, 0) * 1deg))
            saturate(var(--saturate, 1))
            brightness(var(--brightness, 1));
        }

        .keypad__base {
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .keypad__base img {
          transition: translate 0.12s ease-out;
          width: 100%;
        }

        @media (max-width: 768px) {
          .keypad {
            width: clamp(200px, 80vw, 300px);
          }
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-red-700 dark:text-white">
            Get In Touch
          </h2>
          <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
            Let's create something amazing together. Reach out and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side - Form */}
          <div className="order-2 md:order-1">
            <div className="bg-red-50 dark:bg-red-950/50 p-8 rounded-lg border border-red-100 dark:border-red-900">
              <h3 className="text-3xl font-bold text-red-700 dark:text-white mb-2">
                Let's create something.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Share your vision and we'll bring it to life with innovative technology solutions.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-red-200 dark:border-red-800 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="creator@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-red-200 dark:border-red-800 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full border border-red-200 dark:border-red-800 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 text-white w-full py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-sm">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-white text-sm">
                    ✗ Failed to send message. Please try again or contact us directly.
                  </div>
                )}
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-red-200 dark:border-red-800 space-y-4">
                <div className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-red-600 dark:text-white mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-gray-700 dark:text-gray-300">
                      701, Casa Royal Apartment, Mohan Nagar<br />
                      Nagpur, Maharashtra, India
                    </p>
                  </div>
                </div>
                {/* <div className="flex gap-3 items-center">
                  <Phone className="h-5 w-5 text-red-600 dark:text-white flex-shrink-0" />
                 <p className="text-sm text-gray-700 dark:text-gray-300">+91 8412030400</p>
                </div> */}
                <div className="flex gap-3 items-center">
                  <Mail className="h-5 w-5 text-red-600 dark:text-white flex-shrink-0" />
                  {/* <p className="text-sm text-gray-700 dark:text-gray-300">CMD@HOPEHOSPITAL.COM</p> */}
                  <p className="text-sm text-gray-700 dark:text-gray-300">Drmhopesoftwares@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Keypad */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="keypad">
              {/* Base */}
              <div className="keypad__base">
                <img
                  src="https://assets.codepen.io/605876/keypad-base.png?format=auto&quality=86"
                  alt="keypad base"
                />
              </div>

              {/* Email Button */}
              <button
                id="one"
                className="key keypad__single keypad__single--left"
                data-pressed={pressedKey === 'one' ? 'true' : 'false'}
                style={{
                  '--travel': 26,
                  '--hue': 0,
                  '--saturate': 1,
                  '--brightness': 1
                } as React.CSSProperties}
                onClick={() => {
                  handleKeyPress('one')
                  document.getElementById('email')?.focus()
                }}
              >
                <span className="key__mask">
                  <span className="key__content">
                    <span className="key__text">email</span>
                    <img
                      src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                      alt=""
                    />
                  </span>
                </span>
              </button>

              {/* Message Button */}
              <button
                id="two"
                className="key keypad__single"
                data-pressed={pressedKey === 'two' ? 'true' : 'false'}
                style={{
                  '--travel': 26,
                  '--hue': 20,
                  '--saturate': 1.2,
                  '--brightness': 1.1
                } as React.CSSProperties}
                onClick={() => {
                  handleKeyPress('two')
                  document.getElementById('message')?.focus()
                }}
              >
                <span className="key__mask">
                  <span className="key__content">
                    <span className="key__text">msg</span>
                    <img
                      src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86"
                      alt=""
                    />
                  </span>
                </span>
              </button>

              {/* Send Button */}
              <button
                id="three"
                className="key keypad__double"
                data-pressed={pressedKey === 'three' ? 'true' : 'false'}
                style={{
                  '--travel': 18,
                  '--hue': 114,
                  '--saturate': 1.4,
                  '--brightness': 1.2
                } as React.CSSProperties}
                onClick={() => {
                  handleKeyPress('three')
                  const form = document.querySelector('form') as HTMLFormElement
                  form?.requestSubmit()
                }}
              >
                <span className="key__mask">
                  <span className="key__content">
                    <span className="key__text">send.</span>
                    <img
                      src="https://assets.codepen.io/605876/keypad-double.png?format=auto&quality=86"
                      alt=""
                    />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">E</kbd> for email, <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">M</kbd> for message, or <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">Enter</kbd> to send</p>
        </div>
      </div>
    </section>
  )
}
