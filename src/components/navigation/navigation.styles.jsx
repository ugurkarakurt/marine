import styled, { keyframes, css } from "styled-components";

const slideAnimation = keyframes`
  0% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const spinAnimation = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(90deg);
  }
`;

const spinAnimationReverse = keyframes`
  from {
      transform:rotate(90deg);
  }
  to {
      transform:rotate(0deg);
  }
`;


const rotateIcon = css`
  animation-name: ${spinAnimation};
  animation-duration: 200ms;
  animation-timing-function: linear; 
`

const rotateIconReverse = css`
  animation-name: ${spinAnimationReverse};
  animation-duration: 200ms;
  animation-timing-function: linear; 
`

const navOpen = css`
  display: flex;
`

export const NavbarContainer = styled.div`
  flex:  1 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DesktopNav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavContainer = styled.nav`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`

export const MobileNav = styled.div`
  display: block;
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  display: none;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  ${({ open }) => open && navOpen};

  a{
    text-align: end;
    width: fit-content;
    color: #000;
    border-radius: 5px;
    padding: 5px 10px ;
    white-space: nowrap;
    font-size: 12px;
    background: rgb(255,255,255);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    &:nth-child(1){
      animation: ${slideAnimation} .1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    }
    &:nth-child(2){
      animation: ${slideAnimation} .2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    }
    &:nth-child(3){
      animation: ${slideAnimation} .3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    }
    &:nth-child(4){
      animation: ${slideAnimation} .4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    }
    &:nth-child(5){
      animation: ${slideAnimation} .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    
    &:nth-child(6){
      animation: ${slideAnimation} .6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
  }
`
export const MobileNavContainerTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ open }) => open && rotateIcon};
  ${({ open }) => !open && rotateIconReverse};
  img{
    width: 30px;
    height: 30px;
    object-fit: cover;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
  }
`