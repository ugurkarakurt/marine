import React, { useContext, useEffect } from 'react';
import { ColorsContext } from '../../context/colors.context';
import { Swiper, SwiperSlide } from 'swiper/react';
import ISO9001 from "./ISO-9001.2015-1.png";
import IMPA from "./IMPA Certificate Supplier 2023_24- ASAP Marine Supply Co.-1.png";
import ISO14001 from "./ISO-14001.2015-1.png";
import ISO45001 from "./ISO-45001.2018-1.png";

import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

import { EffectCards } from 'swiper/modules';

const Certificate = () => {
  const { colors, setColors } = useContext(ColorsContext);

  useEffect(() => {
    setColors({ ...colors, bannerTextColor: "rgba(255,255,255, .8)", titleColor: "rgba(255,255,255, .8)", backgroundColor: "linear-gradient(to right, #232526, #414345)", textColor: "rgba(255,255,255, .8)" })
  }, []);

  return (
    <div className="slider">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
      >
        <SwiperSlide><img src={ISO9001} alt="" /></SwiperSlide>
        <SwiperSlide><img src={IMPA} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ISO14001} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ISO45001} alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Certificate;
