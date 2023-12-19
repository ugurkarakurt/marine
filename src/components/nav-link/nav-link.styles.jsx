import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLinkContainer = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #434343;
  transition: color .1s ease-in-out;
  position: relative;
  width: fit-content;

  &::after{
    content: '';
    position: absolute;
    left: 0;
    top: calc(100% + 2px); 
    width: 0;
    height: 1px; 
    background-color: #000000; 
    transition: width 0.2s ease; 
  }

  &:hover{
  color: #000000;
  &::after{
    width: 100%;
  }
}
`