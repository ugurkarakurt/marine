import React from 'react';
import LogoIcon from "./header_logo.svg";
import LogoIconWhite from "./ASAPMarine-beyaz.svg";
import { LogoContainer, LogoWrapper } from "./logo.styles";

const Logo = ({ isHover, scrollPosition }) => {
  return (
    <LogoContainer>
      <LogoWrapper>
        <img src={scrollPosition || isHover ? LogoIcon : LogoIconWhite} alt="logo" />
      </LogoWrapper>
    </LogoContainer>
  );
}

export default Logo;
