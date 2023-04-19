import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/hero'
import Article from './container/Article'

const HomePage = () => {
  return <MainLayout>
    <Hero/>
    <Article/>
  </MainLayout>
}

export default HomePage