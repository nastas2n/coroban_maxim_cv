import { Navigation } from "@/components/cv/navigation"
import { Hero } from "@/components/cv/hero"
import { About } from "@/components/cv/about"
import { Ventures } from "@/components/cv/ventures"
import { Skills } from "@/components/cv/skills"
import { Achievements } from "@/components/cv/achievements"
import { Contact } from "@/components/cv/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Ventures />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  )
}
