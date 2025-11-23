'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Internships from '@/components/Internships'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const ParticlesBackground = dynamic(
  () => import('@/components/ParticlesBackground'),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Education />
        <Internships />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

