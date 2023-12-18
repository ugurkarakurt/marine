import React, { useContext, useEffect } from 'react';
import PageContent from '../../components/page-content/page-content.component';
import { ColorsContext } from '../../context/colors.context';

const Mission = () => {
  const { colors, setColors } = useContext(ColorsContext);

  useEffect(() => {
    setColors({ ...colors, backgroundColor: "linear-gradient(to right, #243B55, #141E30)", textColor: "rgba(255,255,255, .8)" })
  }, []);

  return (
    <PageContent
      bannerText={"MISSION"}
      pageTitle={"MISSION:"}
      pageContent={"ASAP MARINE is dedicated to upholding the highest standards in the maritime supply industry. Our core values revolve around the utmost respect for human life, human rights, and the preservation of the environment. We continuously strive to ensure cost-effective, fast, and precise deliveries, prioritizing our customers' needs through our customer-oriented, long-term, and innovative solutions.<br/>We are committed to providing on-time and economically viable options without compromising on quality. Seeking sustainable growth guides our operations, ensuring that our practices contribute positively to the environment while meeting the demands of our clients.<br/>At ASAP MARINE, reliability is our cornerstone, accompanied by a friendly and proactive approach in every facet of our services. We aim not only to meet but exceed expectations, delivering excellence and building lasting relationships with our customers while pioneering innovative solutions in the maritime supply sector."}
      colors={colors}
    />
  );
}

export default Mission;
