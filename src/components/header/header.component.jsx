import React from 'react';
import Logo from '../logo/logo.component';
import Navigation from '../navigation/navigation.component';
import { HeaderContainer, HeaderWrapper, HomeLink } from "./header.styles";

const Header = ({ scrollPosition }) => {

  return (
    <HeaderContainer $scrollPosition={scrollPosition} >
      <HeaderWrapper >
        <HomeLink to="/">
          <Logo />
        </HomeLink>
        <Navigation />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
