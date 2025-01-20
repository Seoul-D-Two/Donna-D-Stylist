import React from 'react'
import Section1 from '../components/about/Section1'
import Section2 from '../components/about/Section2'
import Section3 from '../components/about/Section3'
import Section4 from '../components/about/Section4'
import Section5 from '../components/about/Section5'

function AboutPage() {
  return (
    <div className='bg-customGrayLight'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  )
}

export default AboutPage
