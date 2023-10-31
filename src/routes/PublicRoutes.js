import React from 'react'
import MainLayout from '../layout'
import { Outlet } from 'react-router-dom'
const PublicRoutes = ({ children }) => {
  return (
    <MainLayout>
      <Outlet>
        {children}
      </Outlet>
    </MainLayout>
  )
}

export default PublicRoutes