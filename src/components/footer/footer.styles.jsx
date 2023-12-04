import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 300px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: -99;
`;
export const FooterImage = styled.div`
  position: relative;
  width: 300px;
  img {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
  }
  @media (max-width: 576px) {
    flex: 1 1 100%;
    padding-bottom: 100%;
    img {
    object-fit: contain;
  }
  }
`;
export const FooterDescription = styled.div`
  flex: 1 1;
  padding: 40px;
  display: flex;
  align-items: stretch;
  h3{
    font-size: 20px;
    font-weight: bold;
    color: #0e4da1;
  }

`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`

export const SocialMediaContainer = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  span {
    width: 40px;
    height: 40px;
    display: block;
    &:first-child{
       img{
        filter: invert(53%) sepia(51%) saturate(3797%) hue-rotate(178deg) brightness(102%) contrast(90%);
      }
    }
    &:nth-child(2){
       img{
        filter: invert(54%) sepia(31%) saturate(2562%) hue-rotate(175deg) brightness(94%) contrast(101%);
       }
    }
    &:last-child{
       img{
        filter: invert(27%) sepia(99%) saturate(2470%) hue-rotate(323deg) brightness(92%) contrast(90%);      
       }
    }
  }
`;

export const MapWrapper = styled(MapContainer)`
  width: 467.489px;
  overflow: hidden;
`;