import React from 'react';
import Banner from '../../components/banner/banner.component';
import { HomeContainer } from "./home.styles";
import Gallery from '../../components/gallery/gallery.component';

const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <Gallery />
    </HomeContainer>
  );
}

export default Home;
