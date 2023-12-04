import React from 'react'
import CustomCommonBanner from '../../../components/shared/CustomCommonBanner'
import CustomFeaturedSection from '../../../components/shared/CustomFeaturedSection'
import CustomDrops from '../../../components/shared/CustomDrops'
import CustomCategories from '../../../components/shared/CustomCategoires'

const ShopPage = () => {
  return (
    <>
      <CustomCommonBanner />
      <CustomFeaturedSection showDropDown={true} />
      <CustomCategories border={true} />
      <CustomDrops />
    </>
  )
}

export default ShopPage