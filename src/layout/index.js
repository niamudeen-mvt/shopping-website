import React from 'react'
import TopNav from '../components/navbar/TopNav'
import PrimaryNavbar from '../components/navbar'
import { Container } from '@mui/material'

const MainLayout = ({ children }) => {
  return (
    <>
      <TopNav />
      <PrimaryNavbar />
      <main>
        {children}
      </main>
    </>

  )
}

export default MainLayout