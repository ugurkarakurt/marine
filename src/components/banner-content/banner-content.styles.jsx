import styled from "styled-components";

export const BannerContentContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
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