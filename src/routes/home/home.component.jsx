import React from 'react';
import Banner from '../../components/banner/banner.component';
import { HomeContainer } from "./home.styles";
import Gallery from '../../components/gallery/gallery.component';
import HomeTitle from '../../components/home-title/home-title.component';

const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <HomeTitle />
      <Gallery />
    </HomeContainer>
  );
}

export default Home;
