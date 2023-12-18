import React from 'react';
import { BannerVideoContainer } from './banner-video.styles';
import MainVideo from "./main_video.mp4"

const BannerVideo = () => {
  return (
    <BannerVideoContainer controls={false} muted autoPlay loop>
      <source src={MainVideo} type="video/mp4" />
    </BannerVideoContainer>
  );
}

export default BannerVideo;
