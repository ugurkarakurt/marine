import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const scrollPosition = css`
  height: 54px;
  gap: 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 10px;
    width: 1200px;
    height: 100px;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    ${({ $scrollPosition }) => $scrollPosition && scrollPosition};
    @media (max-width:1200px) {
      width: 100%;
      border-radius: 0;
      background-color: transparent;
      box-shadow: none;
    }
`
export const HeaderWrapper = styled.div`
    display: flex;
    padding: 0 100px 0 20px;
    justify-content: space-between;
    align-items: stretch;
    flex: 1.5 1;
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
      background-color: transparent;
      background: transparent;
      box-shadow: none;
      padding: 0 50px;
      &:hover{
        background-color: transparent;
        box-shadow: none;
      }
    }
`

export const HomeLink = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

