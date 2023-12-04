import React from 'react';
import { BannerImageContainer } from './banner-image.styles';
import WaveImage from "./wave.jpg";

const BannerImage = () => {
  return (
    <BannerImageContainer>
      
      <img src={WaveImage} alt="banner_image" />
    </BannerImageContainer>
  );
}

export default BannerImage;
