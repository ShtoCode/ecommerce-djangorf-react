import React from 'react'
import Carousel from './Carousel'
import HeroContent from './HeroContent'
import TopSells from './TopSells'

const HeaderHome = () => {
  return (
    <div>
      <HeroContent />
      <Carousel />
      <TopSells />
    </div>
  )
}

export default HeaderHome
