import React from 'react'
import FooterSection from './footer'
import PrimaryNavbar from '../components/navbar/PrimaryNavbar'
import TopNavbar from '../components/navbar/TopNavbar'

const MainLayout = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <PrimaryNavbar />
      <main>
        {children}
      </main>
      <FooterSection />
    </>

  )
}

export default MainLayout