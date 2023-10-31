import React from 'react'
import Header from '../components/navbar'
import TopNav from '../components/TopNav'
import FooterSection from './footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <TopNav />
      <Header />
      <main>
        {children}
      </main>
      <FooterSection />
    </>

  )
}

export default MainLayout