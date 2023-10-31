import React from 'react'
import BannerSection from '../../../components/banner'
import DropCollection from '../../../components/collection'
import NewArrivalPage from "../../../components/new-arrival"

const Homepage = () => {
  return (
    <>
      <BannerSection />
      <DropCollection />
      <NewArrivalPage />
    </>
  )
}

export default Homepage