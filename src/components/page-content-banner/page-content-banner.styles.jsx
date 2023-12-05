import styled from "styled-components";

export const BannerContainer = styled.div`
    width: 100%;
    height: 500px;
    background-color: red;
    border-radius: 10px;
    margin-bottom: 50px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
    span{
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      position: absolute;
      font-size: 50px;
      color: red;
    }
`






