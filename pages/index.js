import { useState, useEffect } from 'react'
import CinemaContext from '../lib/CinemaContext'
import PlayScreen from '../components/PlayScreen'
import BootTransition from '../components/BootTransition'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import CurrentStatus from '../components/CurrentStatus'
import ConnectPrompt from '../components/ConnectPrompt'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import PersonalPeek from '../components/PersonalPeek'
import PipelineBackground from '../components/PipelineBackground'

export default function Home() {
  const [phase, setPhase] = useState('play')

  const dispatch = (action) => {
    switch (action.type) {
      case 'PLAY':
        setPhase('booting')
        break
      case 'BOOT_COMPLETE':
        setPhase('portfolio')
        break
    }
  }

  useEffect(() => {
    console.log(
      '%cnice, you actually checked. hi. -> maheshkrishnap.mec@gmail.com',
      'color: #3DE8E0; font-family: JetBrains Mono, monospace; font-size: 12px;'
    )
  }, [])

  return (
    <CinemaContext.Provider value={{ state: { phase }, dispatch }}>
      {phase === 'play' && <PlayScreen />}
      {phase === 'booting' && <BootTransition />}
      {phase === 'portfolio' && (
        <>
          <PipelineBackground />
          <div className="circuit-grid min-h-screen">
            <CustomCursor />
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <StatsBar />
              <TechStack />
              <Projects />
              <Experience />
              <PersonalPeek />
              <CurrentStatus />
              <ConnectPrompt />
              <Contact />
              <Footer />
            </main>
          </div>
        </>
      )}
    </CinemaContext.Provider>
  )
}
