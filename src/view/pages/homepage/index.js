import React from 'react'
import BannerSection from '../../../components/banner'
import DropCollection from '../../../components/collection'
import NewArrivalPage from "../../../components/new-arrival"
import FeaturedProducts from '../../../components/featured'

const Homepage = () => {
  return (
    <>
      <BannerSection />
      <DropCollection />
      <NewArrivalPage />
      <FeaturedProducts />
    </>
  )
}

export default Homepage