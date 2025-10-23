import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import WhyChoose from './components/WhyChoose'
import Services from './components/Services'
import DevelopmentProcess from './components/DevelopmentProcess'
import FeaturedProjects from './components/FeaturedProjects'
import OpenSource from './components/OpenSource'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import ConsultationModal from './components/ConsultationModal'

function App() {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onConsultationClick={() => setShowConsultationModal(true)} />
      <Hero onConsultationClick={() => setShowConsultationModal(true)} />
      <Achievements />
      <About />
      <WhatWeDo />
      <WhyChoose />
      <Services />
      <DevelopmentProcess />
      <FeaturedProjects />
      <OpenSource />
      <Technologies />
      <Footer />
      {showConsultationModal && (
        <ConsultationModal onClose={() => setShowConsultationModal(false)} />
      )}
    </div>
  )
}

export default App
