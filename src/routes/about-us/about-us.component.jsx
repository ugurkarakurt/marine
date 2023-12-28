import React, { useContext, useEffect } from 'react';
import { ColorsContext } from '../../context/colors.context';
import PageContent from '../../components/page-content/page-content.component';
import BannerImage from "./about_us_banner.jpeg";

const AboutUs = () => {
  const { colors, setColors } = useContext(ColorsContext);

  useEffect(() => {
    setColors({ ...colors, bannerTextColor: "rgba(255,255,255, .8)", titleColor: "rgba(255,255,255, .8)", backgroundColor: "linear-gradient(to right, #232526, #414345)", textColor: "rgba(255,255,255, .8)" })
  }, []);

  return (
    <PageContent
      bannerText={"ABOUT US"}
      pageTitle={"ABOUT US:"}
      pageContent={"Established on February 14, 2023, ASAP Marine Supply Co. was founded by Mr. Zafer YILMAZ, a revered figure in Turkey's marine supply industry with a wealth of experience dating back to 2007. Since its inception, the company has exhibited consistent growth, a testament to its dedicated team of experts.<br/><br/>Our primary objective revolves around staying attuned to market demands, ensuring that we offer timely and cost-effective solutions to fulfill the needs of our partners at sea. Throughout this process, we prioritize the paramount values of human life, rights, and environmental policies.<br/><br/>At ASAP Marine Supply Co., our commitment goes beyond mere business operations. We are dedicated to upholding ethical standards, valuing human life, and safeguarding the environment. Our unwavering dedication to these principles defines us and shapes our every action.<br/><br/>We believe that our success is intertwined with the satisfaction and trust of our partners. Hence, we continually strive to exceed expectations by delivering superior service, reliable products, and innovative solutions.<br/><br/>Driven by a passion for excellence and a profound respect for the seas, ASAP Marine Supply Co. stands as a beacon of reliability, integrity, and unwavering commitment within the marine supply industry."}
      colors={colors}
      img={BannerImage}
    />
  );
}

export default AboutUs;
