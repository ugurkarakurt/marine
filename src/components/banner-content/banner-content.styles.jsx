import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
            transform: translateY(100px);
  }
  100% {
            transform: translateY(0);
  }
`
export const BannerContentContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  animation: ${slideAnimation} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  h1{
    color: #ffffff;
    font-size: 100px;
    font-weight: bold;
    transform: translateY(-50%);
    text-shadow: 1px 1px 7px rgba(0,0,0,0.69);
    @media (max-width:1200px) {
      transform: none;
      font-size: 50px;
    }
}
`