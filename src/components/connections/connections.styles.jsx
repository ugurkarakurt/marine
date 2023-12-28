import styled, { css } from "styled-components";

const hideSocialMedia = css`
  display: none;
`;

export const ConnectionsContainer = styled.div`
  width: 1200px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  z-index: 10;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 50px;
  font-size: 14px;
  border-radius: 10px;
  ${({ $scrollPosition }) => $scrollPosition && hideSocialMedia};
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 0 20px;

  }
`;

export const Email = styled.span`
  padding: 0 10px;
  border-right: 1px solid #fff;
`;
export const Number = styled.span`
  padding: 0 10px;
  img{
    width: 20px;
    height: 20px;
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  span {
    width: 20px;
    height: 20px;
    display: block;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
