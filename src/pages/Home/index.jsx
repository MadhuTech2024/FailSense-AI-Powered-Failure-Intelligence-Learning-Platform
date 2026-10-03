import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Features from '../../components/Feature'
import HowItWorks from '../../components/HowItWorks'
import FailureIntelligence from '../../components/FailureIntelligence'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'


import './index.css'

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FailureIntelligence />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default Home