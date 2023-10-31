import React, { useState } from "react";

import fbIcon from "../../assets/icons/fb-icon.svg"
import twitterIcon from "../../assets/icons/twiter-icon.svg"
import instagramIcon from "../../assets/icons/instagram-icon.svg"
import musicIcon from "../../assets/icons/music-icon.svg"


const SelectComponent = ({ base }) => {
  return (
    <select>
      <option selected hidden>{base}</option>
      <option>1</option>
      <option>2</option>
    </select>
  )
}

const TopNav = () => {
  return (
    <header className="bg_black">
      <div className="container">
        <div className='top_nav flex_SB'>
          <ul className="icon_section">
            <li><a href="#">
              <img src={fbIcon} alt="fb-icon" />
            </a></li>
            <li><a href="#">
              <img src={twitterIcon} alt="fb-icon" />
            </a></li>
            <li><a href="#">
              <img src={instagramIcon} alt="fb-icon" />
            </a></li>
            <li><a href="#">
              <img src={musicIcon} alt="fb-icon" />
            </a></li>
          </ul>
          <div className="content_section">
            <p>
              <span>
                {`SHOP15 `}
              </span>
              For 15 Percent Off Your order!
            </p>
          </div>
          <div className="dropdown_section">
            <SelectComponent base={"English"} />
            <SelectComponent base={"USD"} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopNav