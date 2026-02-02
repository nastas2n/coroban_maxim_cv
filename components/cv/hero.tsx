"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-muted z-50">
        <div 
          className="h-full bg-[#2563EB] transition-all duration-150"
          style={{ width: "0%" }}
          id="scroll-progress"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Overline */}
          <p className="text-[#2563EB] font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Student / Entrepreneur / Developer
          </p>

          {/* Main Headline - Serif */}
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[120px] font-normal leading-[0.9] tracking-tight text-foreground mb-8">
            <span className="block">Coroban</span>
            <span className="block italic text-[#2563EB]">Maxim</span>
          </h1>

          {/* Tagline - Sans */}
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12">
            Building the future through technology and entrepreneurship. 
            Technical University of Moldova, TI Program.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#ventures"
              className="group inline-flex items-center justify-center gap-3 bg-[#2563EB] text-white px-8 py-4 font-sans text-sm tracking-wide uppercase hover:bg-[#1E40AF] transition-colors duration-300"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 border border-foreground text-foreground px-8 py-4 font-sans text-sm tracking-wide uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">Scroll</span>
        <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
