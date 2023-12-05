import { useEffect } from 'react'
import MainLayout from '../layout'
import { Outlet } from 'react-router-dom'

const PublicRoutes = ({ children }) => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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