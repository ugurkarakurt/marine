import React, { useState } from 'react';
import NavLink from '../nav-link/nav-link.component';
import WheelIcon from "./wheel.png";
import { NavbarContainer, DesktopNav, MobileNavContainerTrigger, MobileNavContainer, MobileNav } from "./navigation.styles";

const Navigation = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsCartOpen = () => setIsNavOpen(!isNavOpen);

  return (
    <NavbarContainer>
      <DesktopNav>
        <NavLink route={"/about-us"} page={"About Us"} />
        <NavLink route={"/mission"} page={"Mission"} />
        <NavLink route={"/vision"} page={"Vision"} />
        <NavLink route={"/our-products"} page={"Our Products"} />
        <NavLink route={"/certificate"} page={"Certificates"} />
        <NavLink route={"/contact"} page={"Contact"} />
      </DesktopNav>
      <MobileNavContainer>
        <MobileNavContainerTrigger open={isNavOpen} onClick={() => { toggleIsCartOpen(); }}>
          <img src={WheelIcon} alt="wheel_icon" />
        </MobileNavContainerTrigger>
        <MobileNav open={isNavOpen}>
          <NavLink route={"/about-us"} page={"About Us"} />
          <NavLink route={"/mission"} page={"Mission"} />
          <NavLink route={"/vision"} page={"Vision"} />
          <NavLink route={"/our-products"} page={"Our Products"} />
          <NavLink route={"/certificate"} page={"Certificates"} />
          <NavLink route={"/contact"} page={"Contact"} />
        </MobileNav>
      </MobileNavContainer>
    </NavbarContainer>
  );
}

export default Navigation;
