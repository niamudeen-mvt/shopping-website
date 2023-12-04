import React from "react";
import BannerSection from "../../../components/banner";
import DropCollection from "../../../components/collection";
import NewArrivalPage from "../../../components/new-arrival";
import FeaturedProducts from "../../../components/featured";
import ImgaeGallery from "../../../components/gallery";
import ContentBar from "../../../components/ContentBar";
import TestimonialSection from "../../../components/testimonial";
import CustomCategories from "../../../components/shared/CustomCategoires";

const Homepage = () => {
  return (
    <>
      <BannerSection />
      <DropCollection />
      <NewArrivalPage />
      <ContentBar />
      <FeaturedProducts />
      <TestimonialSection />
      <CustomCategories />
      <ImgaeGallery />
    </>
  );
};

export default Homepage;
