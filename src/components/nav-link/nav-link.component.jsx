import React from 'react';
import { NavLinkContainer } from "./nav-link.styles";

const NavLink = ({ route, page }) => {
  return (
    <NavLinkContainer to={route}>{page}</NavLinkContainer>
  );
}

export default NavLink;