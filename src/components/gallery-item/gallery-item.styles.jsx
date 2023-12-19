import styled, { keyframes, css } from "styled-components";

const bounceAnimation = keyframes`
  0% {
            transform: scale(0.5);
  }
  100% {
            transform: scale(1);
  }
`

const isVisible = css`
  visibility: visible;
  animation: ${bounceAnimation} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

export const GalleryItemContainer = styled.div`
  height: 400px;
  width: 400px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background-color: #F7F7F7;
  visibility: hidden;
  ${({ $isVisible }) => $isVisible && isVisible};

  img{
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    object-fit: contain;
  }
`