
import React, { useContext } from 'react';
import { BannerContainer, BannerText } from "./page-content-banner.styles";
import { ColorsContext } from '../../context/colors.context';


const PageContentBanner = ({ img, text }) => {
  const { colors } = useContext(ColorsContext);
  const { bannerTextColor } = colors;

  return (
    <BannerContainer>
      {img && (<img src={img} alt="banner_image" />)}
      <BannerText $bannerTextColor={bannerTextColor} >{text}</BannerText>
    </BannerContainer>
  );
}

export default PageContentBanner;
