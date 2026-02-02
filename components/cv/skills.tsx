"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 75 },
      { name: "C++", level: 70 },
      { name: "Node.js", level: 80 },
      { name: "SQL", level: 75 },
    ]
  },
  {
    title: "Business",
    skills: [
      { name: "Digital Marketing", level: 85 },
      { name: "Sales", level: 80 },
      { name: "Product Strategy", level: 75 },
      { name: "UI/UX Design", level: 70 },
    ]
  }
]

export function Skills() {
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
      id="skills" 
      className="py-32 lg:py-40 bg-background border-t border-border"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#2563EB] font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl text-foreground">
            Skills & 
            <span className="italic"> capabilities</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="font-serif text-2xl text-foreground mb-8 pb-4 border-b border-border">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-sans text-sm text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] bg-muted overflow-hidden">
                      <div 
                        className="h-full bg-[#2563EB] transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${catIndex * 150 + skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
