"use client"

import { useEffect, useRef, useState } from "react"

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "in" },
  { name: "GitHub", href: "#", icon: "gh" },
  { name: "Email", href: "mailto:hello@corobanmaxim.com", icon: "@" },
]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer 
      ref={sectionRef}
      id="contact" 
      className="py-16 lg:py-20 bg-foreground text-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8 mb-12 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700`}>
          {/* Left - CTA */}
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
              Let&apos;s work <span className="italic">together</span>
            </h2>
            <p className="font-sans text-background/60 text-sm max-w-sm">
              Open to new opportunities and collaborations.
            </p>
          </div>

          {/* Center - Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-background/40 mb-2">Location</p>
              <p className="font-sans text-sm">Chisinau, Moldova</p>
            </div>
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-background/40 mb-2">Email</p>
              <a href="mailto:hello@corobanmaxim.com" className="font-sans text-sm hover:text-[#60A5FA] transition-colors">
                hello@corobanmaxim.com
              </a>
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="w-10 h-10 border border-background/20 flex items-center justify-center font-mono text-xs hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-serif text-xl">CM</p>
          <p className="font-sans text-xs text-background/40">
            &copy; {new Date().getFullYear()} Coroban Maxim
          </p>
        </div>
      </div>
    </footer>
  )
}
