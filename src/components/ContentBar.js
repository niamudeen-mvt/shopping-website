import React from "react";
import mainImage from "../assets/images/content-bar-section-main-img.png";
import CustomContentBar from "./shared/CustomContentBar";
import bgImage from "../assets/images/content-bar-section-img.png"

const ContentBar = () => {
  return (
    <CustomContentBar heading="Amazing prices and free worldwide shipping on all orders!"
      subheading="Whether you want to feel safer in your home, your door lock is due for an upgrade, or you just want something new to spice up your door, buying a new door lock isn't always as simple a proposition as it may seem."
      btnText="Shop Now"
      bgImg={bgImage}
      contentbarImg={mainImage} />
  );
};

export default ContentBar;
