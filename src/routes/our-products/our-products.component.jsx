import React, { useEffect } from 'react';
import PageContent from '../../components/page-content/page-content.component';
import { useContext } from 'react';
import { ColorsContext } from '../../context/colors.context';
import BannerImage from "./our_prodcut_image.jpeg";

const OurProducts = () => {

  const { colors, setColors } = useContext(ColorsContext);

  useEffect(() => {
    setColors({ ...colors, backgroundColor: "linear-gradient(to right, #000000, #434343)", textColor: "rgba(255,255,255, .8)" })
  }, []);

  return (
    <PageContent
      bannerText={"OUR PRODUCT"}
      pageTitle={"OUR SERCIVES:"}
      pageContent={"<ol><li>GENERAL STORES SUPPLY</li><li>VALVES ( JIS & DIN STANDARD ), PIPES, FLANGES</li><li>ENGINE STORES</li><li>DECK STORES</li><li>ANCHORS, ANCHOR CHAINS, KENTER SHACKLES</li><li>MOORING & WIRE ROPES, LASHING EQUIPMENTS & ACCESSORIES</li><li>CABIN & GALLEY STORES</li><li>ELECTRICAL STORES</li><li>SAFETY EQUIPMENTS</li><li>ELECTRIC MOTORS & PUMPS</li><li>HYDRAULIC HOSES & STORES</li><li>CHARTS & PUBLICATIONS</li><li>CHEMICALS  & MARINE PAINTS</li></ol>"}
      colors={colors}
      img={BannerImage}
    />

  );
}

export default OurProducts;
