import React from 'react'
import TopNav from '../components/TopNav'
import FooterSection from './footer'
import PrimaryNavbar from '../components/navbar'

const MainLayout = ({ children }) => {
  return (
    <>
      <TopNav />
      <PrimaryNavbar />
      <main>
        {children}
      </main>
      <FooterSection />
    </>

  )
}

export default MainLayout