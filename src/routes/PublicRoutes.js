import React, { useEffect } from 'react'
import MainLayout from '../layout'
import { Outlet, useNavigate } from 'react-router-dom'
const PublicRoutes = ({ children }) => {

  const navigate = useNavigate()

  useEffect(() => {
    navigate("/home")
  }, [])
  return (
    <MainLayout>
      <Outlet>
        {children}
      </Outlet>
    </MainLayout>
  )
}

export default PublicRoutes