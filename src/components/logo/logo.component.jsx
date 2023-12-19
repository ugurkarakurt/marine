import React, { useEffect, useState } from 'react';
import LogoIcon from "./header_logo.svg";
import LogoIconWhite from "./ASAPMarine-beyaz.svg";
import { LogoContainer, LogoWrapper } from "./logo.styles";

const Logo = ({ isHover, scrollPosition }) => {

  const [shouldScroll, setShouldScroll] = useState(window.innerWidth < 768);


  useEffect(() => {
    const addEventListeners = () => {
      window.addEventListener("resize", handleResize);
    };

    const handleResize = () => {
      setShouldScroll(window.innerWidth < 768);
    };

    addEventListeners();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <LogoContainer>
      <LogoWrapper>
        <img src={!shouldScroll && (scrollPosition || isHover) ? LogoIcon : LogoIconWhite} alt="logo" />
      </LogoWrapper>
    </LogoContainer>
  );
}

export default Logo;
