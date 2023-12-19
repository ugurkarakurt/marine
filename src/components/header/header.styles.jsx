import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const scrollPosition = css`
  top: 15px;
  &>div {
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    @media (max-width:768px) {
      background-color: transparent;
      box-shadow: none;
    }
  }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 1200px;
    height: 60px;
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    transition: top .1s ease-in-out;
    ${({ $scrollPosition }) => $scrollPosition && scrollPosition};
    @media (max-width:1200px) {
      width: 100%;
      border-radius: 0;
  
    }
    @media (max-width:768px) {
      background-color: transparent;
      box-shadow: none;
    }
`
export const HeaderWrapper = styled.div`
    display: flex;
    height: 100%;
    padding: 0 100px 0 20px;
    justify-content: space-between;
    align-items: stretch;
    border-radius: 10px;
    background: rgb(255,255,255);
    background: linear-gradient(328deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%);
    transition: all .1s ease-in-out;

    &:hover{
      background-color: #fff;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    @media (max-width:1200px) {
      border-radius: 0;
      padding: 0 50px;
      &:hover{
        background-color: transparent;
        box-shadow: none;
      }
    }
    @media (max-width:768px) {
      background-color: transparent;
      background: transparent;
      box-shadow: none;
      padding: 0 20px;
    }
`

export const HomeLink = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

