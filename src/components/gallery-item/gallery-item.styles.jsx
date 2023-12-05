import styled from "styled-components";

export const GalleryItemContainer = styled.div`
  height: 400px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background-color: red;
  transition: box-shadow 0.1s cubic-bezier(.25,.8,.25,1);
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  img{
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    object-fit: cover;
  }
`