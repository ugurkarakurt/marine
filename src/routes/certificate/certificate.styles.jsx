import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';


export const Slider = styled.div`
  
`

export const SliderContainer = styled(Swiper)`
  width: 240px;
  height: 320px;
`

export const SliderItem = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  img {
  width: 100%;
  height: 100%;
}
`
