import React from 'react';
import { BannerVideoContainer } from './banner-video.styles';

const BannerVideo = () => {
  return (
    <BannerVideoContainer controls={false} muted autoPlay loop>
      <source src="https://video.wixstatic.com/video/ccc00a_2c42219e0e1b49ad923458fbe6c5ca84/480p/mp4/file.mp4" type="video/mp4" />
    </BannerVideoContainer>
  );
}

export default BannerVideo;
