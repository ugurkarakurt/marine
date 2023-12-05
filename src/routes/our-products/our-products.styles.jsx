import styled from "styled-components";

export const OurProductsContainer = styled.div`
  min-height: 100vh;
  background: #141E30;  
  background: -webkit-linear-gradient(to right, #243B55, #141E30); 
  background: linear-gradient(to right, #243B55, #141E30); 
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
`

export const StickyContent = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  color: rgba(255,255,255, .8);
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  h2{
    font-size: 25px;
    margin-bottom: 20px;
  }
  p{
    font-size: 20px;
    letter-spacing: 1.2px;
    line-height: 1.4;
    text-align: justify;
  }
`


