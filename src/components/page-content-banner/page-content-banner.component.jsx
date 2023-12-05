
import React from 'react';
import { BannerContainer } from "./page-content-banner.styles";


const PageContentBanner = ({ img, text }) => {
  return (
    <BannerContainer>
      <img src={img} alt="banner_image" />
      <span>{text}</span>
    </BannerContainer>
  );
}

export default PageContentBanner;
