"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MapPin } from "lucide-react"

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
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-red-700 dark:text-white">
            Get In Touch
          </h2>
          <p className="max-w-[85%] leading-normal text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
            Let's create something amazing together. Reach out and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side - Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-red-50 dark:bg-red-950/50 p-8 rounded-lg border border-red-100 dark:border-red-900">
              <h3 className="text-3xl font-bold text-red-700 dark:text-white mb-2">
                Let's create something.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Share your vision and we'll bring it to life with innovative technology solutions.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    className="w-full border border-red-200 dark:border-red-800 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="creator@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="w-full border border-red-200 dark:border-red-800 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
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
                  <div role="alert" className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-sm">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div role="alert" className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-white text-sm">
                    Failed to send message. Please try again or contact us directly.
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
                  src="/images/keypad-base.png"
                  alt="keypad base"
                />
              </div>

              {/* Email Button */}
              <button
                id="one"
                className="key keypad__single keypad__single--left"
                data-pressed={pressedKey === 'one' ? 'true' : 'false'}
                onClick={() => {
                  handleKeyPress('one')
                  document.getElementById('email')?.focus()
                }}
              >
                <span className="key__mask">
                  <span className="key__content">
                    <span className="key__text">email</span>
                    <img
                      src="/images/keypad-single.png"
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
                onClick={() => {
                  handleKeyPress('two')
                  document.getElementById('message')?.focus()
                }}
              >
                <span className="key__mask">
                  <span className="key__content">
                    <span className="key__text">msg</span>
                    <img
                      src="/images/keypad-single.png"
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
                      src="/images/keypad-double.png"
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
