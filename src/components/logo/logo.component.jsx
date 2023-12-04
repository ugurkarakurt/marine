import React from 'react';
import LogoIcon from "./logo.png";
import { LogoContainer, LogoWrapper } from "./logo.styles";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoWrapper>
        <img src={LogoIcon} alt="logo" />
      </LogoWrapper>
    </LogoContainer>
  );
}

export default Logo;
