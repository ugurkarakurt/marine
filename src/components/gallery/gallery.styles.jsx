import styled from "styled-components";

export const GalleryContainer = styled.div`
  padding: 50px;
  width: 100%;
  height: fit-content;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(3,22,49,1) 100%);  box-shadow: 0px -10px 11px 2px rgba(3,22,49,0.71);
`

export const GalleryItems = styled.div`
  margin: 0 auto;
  width: 900px;
  height: fit-content;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
`