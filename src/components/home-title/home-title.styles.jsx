import styled, { keyframes, css } from "styled-components";

const bounceAnimation = keyframes`
  0% {
            transform: scale(0.5);
  }
  100% {
            transform: scale(1);
  }
`

export const HomeTitleContainer = styled.div`
  height: 500px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 30px;
  ${({ $isVisible }) => $isVisible && isVisible};
`

export const Title = styled.div`
  font-size: 50px;
  visibility: hidden;
`;

export const Description = styled.div`
  font-size: 20px;
  width: 50%;
  text-align: justify;
  line-height: 1.5;
  visibility: hidden;
  font-style: italic;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const isVisible = css`
  ${Title},${Description}{
    visibility: visible;
    animation: ${bounceAnimation} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }


`;
