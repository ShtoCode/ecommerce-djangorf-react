import React from 'react'
import '../index.css'
import HeaderHome from '../components/home/header/HeaderHome'
import TopSells from '../components/home/TopSells'

const HomePage = () => {
  return (
    <div className='h-screen'>
      <HeaderHome />
      <TopSells />
    </div>
  )
}

export default HomePage
