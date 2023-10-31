import React from 'react'
import BannerSection from '../../../components/banner'
import DropCollection from '../../../components/collection'
import NewArrivalPage from "../../../components/new-arrival"
import FeaturedProducts from '../../../components/featured'
import ImgaeGallery from '../../../components/gallery'
import ContentBar from '../../../components/ContentBar'

const Homepage = () => {
  return (
    <>
      <BannerSection />
      <DropCollection />
      <NewArrivalPage />
      <ContentBar />
      <FeaturedProducts />
      <ImgaeGallery />
    </>
  )
}

export default Homepage