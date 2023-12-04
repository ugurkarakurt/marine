import React from 'react';
import { BannerContainer } from "./banner.styles";
import BannerVideo from '../banner-video/banner-video.component';
import BannerImage from '../banner-image/banner-image.component';
import BannerContent from '../banner-content/banner-content.component';

const Banner = () => {
  return (
    <BannerContainer >
      <BannerContent />
      <BannerImage />
    </BannerContainer>
  );
}

export default Banner;
