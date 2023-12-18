import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 120px;
`
export const LogoWrapper = styled.div` 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 120%;
  width: 120%;
  position: relative;
  img{
   position: absolute;
   width: 100%;
   height: 100%;
   inset: 0;
   object-fit: contain;
  }
`