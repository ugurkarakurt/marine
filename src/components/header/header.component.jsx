import React, { useState } from 'react';
import Logo from '../logo/logo.component';
import Navigation from '../navigation/navigation.component';
import { HeaderContainer, HeaderWrapper, HomeLink } from "./header.styles";

const Header = ({ scrollPosition }) => {

  const [isHover, setIsHover] = useState(false);

  const isMouseEnter = () => {
    setIsHover(true);
  }

  const isMouseLeave = () => {
    setIsHover(false);
  }

  return (
    <HeaderContainer onMouseLeave={isMouseLeave} onMouseEnter={isMouseEnter} $scrollPosition={scrollPosition} >
      <HeaderWrapper >
        <HomeLink to="/">
          <Logo isHover={isHover} scrollPosition={scrollPosition} />
        </HomeLink>
        <Navigation />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
