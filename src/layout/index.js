import React from 'react'
import Header from '../components/navbar'
import TopNav from '../components/TopNav'

const MainLayout = ({ children }) => {
  return (
    <>
      <TopNav />
      <Header />
      {/* <main>
        {children}
      </main> */}
    </>

  )
}

export default MainLayout