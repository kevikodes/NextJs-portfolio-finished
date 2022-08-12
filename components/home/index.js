import React from 'react'
import Hero from './hero'
import Skills from './skills'
import Work from './work'
import Projects from './projects'
import Contact from './contact'
const HomePage = () => {
  return (
    <div className='bg-blue pt-28'>
      <div className='overflow-x-hidden'>
        {/* Hero Component */}
        <Hero />
        {/* Skills Component */}
        <Skills />
        {/* Work Component */}
        <Work />
        {/* Projects Component */}
        <Projects />
        {/* Contact Component */}
        <Contact />
      </div>
    </div>
  )
}

export default HomePage
