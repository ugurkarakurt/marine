import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
            transform: translateY(100px);
  }
  100% {
            transform: translateY(0);
  }
`

export const Container = styled.div`
  min-height: 100vh;
  background: #141E30;  
  background: ${(props) => props.$backgroundcolor}; 
  width: 100%;
  margin-bottom: 350px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.5), 0 6px 6px rgba(0,0,0,0.23);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const ContentWrapper = styled.div`
  width: 900px;
  position: relative;
  height: 100%;
  background-color: transparent;
  padding: 170px 0;
  @media (max-width:1200px) {
   width: 100%;
   padding: 150px 0 100px 0;
  }
`

export const StickyContent = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  @media (max-width:1200px) {
   width: 100%;
  }
`

export const PageTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
  color: ${(props) => props.$titlecolor};
  animation: ${slideAnimation} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @media (max-width:1200px) {
   font-size: 16px;
   padding: 0 30px;
  }
`
export const PageParagraph = styled.p`
  font-size: 20px;
  letter-spacing: 1.2px;
  line-height: 1.4;
  text-align: left;
  color: ${(props) => props.$textcolor};
  padding-left: 50px;
  animation: ${slideAnimation} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @media (max-width:1200px) {
   font-size: 14px;
   padding: 0 50px;
   text-align: left;

  }
  ol{
    li{
      list-style: disc;
    }
  }
  br{
    margin: 0 20px;
  }
  table{
    margin: 20px 0px;
    flex: 1 1;
    tr{
      padding: 5px 10px 0 0;
      th{
        text-align: start;
        font-weight: bold;
        padding: 5px 0;
      }
    }
  }
`


