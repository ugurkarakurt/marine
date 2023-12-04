import React, { useState } from 'react';
import Logo from '../logo/logo.component';
import Navigation from '../navigation/navigation.component';
import Connections from '../connections/connections.component';
import { HeaderContainer, HeaderWrapper, HomeLink } from "./header.styles";

const Header = () => {

  const [scrollPosition, setScrollPosition] = useState(false);

  (function addEventListeners() {
    window.addEventListener("scroll", windowScroll);
  })();

  function windowScroll() {
    let scrollValue__Y = window.scrollY;
    if (scrollValue__Y > 50) {
      setScrollPosition(true)
    } else {
      setScrollPosition(false)
    }
  }

  return (
    <HeaderContainer $scrollPosition={scrollPosition} >
      <Connections scrollPosition={scrollPosition} />
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
