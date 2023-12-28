import React, { useContext, useEffect } from 'react';
import { ColorsContext } from '../../context/colors.context';
import PageContent from '../../components/page-content/page-content.component';
import BannerImage from "./vision_banner.jpg";

const Vision = () => {
  const { colors, setColors } = useContext(ColorsContext);

  useEffect(() => {
    setColors({ ...colors, backgroundColor: "linear-gradient(to right, #243B55, #141E30)", textColor: "rgba(255,255,255, .8)" })
  }, []);
  return (
    <PageContent
      bannerText={"VISION"}
      pageTitle={"VISION:"}
      pageContent={"To be the most customer-oriented and reliable service provider for our customers, with our innovative approaches, excellent service standards and dedication to marine Supply."}
      colors={colors}
      img={BannerImage}
    />
  );
}

export default Vision;
