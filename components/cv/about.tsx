"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { number: "2+", label: "Startups Founded" },
  { number: "2x", label: "Top 3 Tekwill Ambassador" },
  { number: "Full-Stack", label: "Developer" },
]

export function About() {
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
    <section 
      ref={sectionRef}
      id="about" 
      className="py-32 lg:py-40 bg-background border-t border-border"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Text Content */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#2563EB] font-sans text-sm tracking-[0.3em] uppercase mb-6">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground mb-8">
              Crafting digital
              <span className="italic"> experiences</span>
            </h2>
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
              <p>
                Currently pursuing my degree in Information Technology at the Technical University of Moldova, 
                I combine academic rigor with entrepreneurial ambition.
              </p>
              <p>
                From founding startups to winning development competitions, I believe in building 
                products that solve real problems. My journey spans hardware innovation with Aura Cases, 
                digital networking solutions with BizCard MD, and web optimization through StoicScale.
              </p>
              <p>
                Based in Chisinau, Moldova, I&apos;m always exploring the intersection of technology, 
                design, and business.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group border-b border-border pb-8 last:border-0"
                >
                  <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground block mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                    {stat.number}
                  </span>
                  <span className="font-sans text-sm tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
