"use client"

import { useEffect, useRef, useState } from "react"

const achievements = [
  {
    year: "2024",
    title: "Top 3 Tekwill Junior Ambassador",
    subtitle: "App Development Track",
    description: "Recognized for excellence in mobile application development and mentorship."
  },
  {
    year: "2023",
    title: "Top 3 Tekwill Junior Ambassador",
    subtitle: "Web Development Track",
    description: "Awarded for outstanding performance in web technologies and project delivery."
  },
  {
    year: "2023",
    title: "Founded Multiple Startups",
    subtitle: "Entrepreneurial Journey",
    description: "Launched Aura Cases, BizCard MD, and StoicScale within a single year."
  },
  {
    year: "2022",
    title: "Enrolled at UTM",
    subtitle: "TI Program",
    description: "Began pursuing Information Technology degree at Technical University of Moldova."
  }
]

export function Achievements() {
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
      id="achievements" 
      className="py-32 lg:py-40 bg-muted"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#2563EB] font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Milestones
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl text-foreground">
            Achievements & 
            <span className="italic"> recognition</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 md:space-y-0">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`relative md:grid md:grid-cols-2 md:gap-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${index % 2 === 0 ? "" : "md:text-right"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}`}>
                  <div className="bg-background p-8 border border-border group hover:border-[#2563EB] transition-colors duration-300">
                    <span className="font-mono text-[#2563EB] text-sm mb-4 block">{achievement.year}</span>
                    <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-2">{achievement.title}</h3>
                    <p className="font-sans text-sm text-[#2563EB] tracking-wider uppercase mb-4">{achievement.subtitle}</p>
                    <p className="font-sans text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-3 h-3 bg-[#2563EB] rounded-full -translate-x-1/2 hidden md:block" />

                {/* Spacer for alternating layout */}
                <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : ""}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
