import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0% {
            transform: scale(0.5);
  }
  100% {
            transform: scale(1);
  }
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  margin-bottom: 50px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  animation: ${bounceAnimation} 0.3s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
  @media (max-width:768px) {
   border-radius: 0;
  }

  &:hover{
    img{
    transform: scale(1);
    transition: all 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    opacity: 1;
    }
    div{
      transform: translate(-50%, -50%) scale(1);
      transition: all 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  img {
    transform: scale(1.1);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: .5;
  }
`;
export const BannerText = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(.8);
  position: absolute;
  font-size: 50px;
  text-shadow: 1px 1px 8px rgba(0,0,0,0.59);
  color: ${(props) => props.$bannerTextColor};
`;
