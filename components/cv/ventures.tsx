"use client"

import { useEffect, useRef, useState } from "react"

const ventures = [
  {
    title: "Aura Cases",
    description: "Innovative e-ink phone cases combining technology with personalization. Redefining mobile accessories.",
    tech: ["Hardware", "E-ink", "IoT"],
    status: "Active",
    number: "01",
    link: null
  },
  {
    title: "BizCard MD",
    description: "NFC-enabled smart business cards revolutionizing professional networking in the digital age.",
    tech: ["NFC", "Digital", "Networking"],
    status: "Active",
    number: "02",
    link: "https://biz-dev.org"
  },
  {
    title: "StoicScale",
    description: "Web design and digital optimization agency helping small businesses establish their online presence.",
    tech: ["React", "Next.js", "SEO"],
    status: "Growing",
    number: "03",
    link: "https://stoicscale.com"
  }
]

export function Ventures() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="ventures" 
      className="py-32 lg:py-40 bg-foreground text-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#60A5FA] font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Ventures
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl">
            Building products that 
            <span className="italic"> matter</span>
          </h2>
        </div>

        {/* Ventures Grid */}
        <div className="grid gap-0">
          {ventures.map((venture, index) => (
            <div 
              key={index}
              className={`group border-t border-background/20 py-12 lg:py-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-sm text-background/40">{venture.number}</span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  {venture.link ? (
                    <a 
                      href={venture.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 group/link"
                    >
                      <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal group-hover:text-[#60A5FA] transition-colors duration-300">
                        {venture.title}
                      </h3>
                      <svg 
                        className="w-5 h-5 text-background/40 group-hover/link:text-[#60A5FA] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  ) : (
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal group-hover:text-[#60A5FA] transition-colors duration-300">
                      {venture.title}
                    </h3>
                  )}
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="font-sans text-background/70 leading-relaxed mb-4">
                    {venture.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {venture.tech.map((t, i) => (
                      <span key={i} className="font-sans text-xs tracking-wider uppercase text-background/50 border border-background/20 px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="lg:col-span-2 lg:text-right">
                  <span className={`inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase ${venture.status === "Active" ? "text-[#60A5FA]" : "text-emerald-400"}`}>
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                    {venture.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
