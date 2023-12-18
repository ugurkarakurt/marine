import React from 'react';
import { BannerImageContainer } from './banner-image.styles';
import MainImage from "./main_image.jpeg";

const BannerImage = () => {
  return (
    <BannerImageContainer>
      
      <img src={MainImage} alt="banner_image" />
    </BannerImageContainer>
  );
}

export default BannerImage;
