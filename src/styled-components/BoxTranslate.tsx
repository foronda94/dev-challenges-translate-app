import styled from "styled-components";
import { ColorsApp } from "../utilies/ColorApp";


export const Box = styled.div`

  min-width: calc(50vw - 5vw);
  height: 50vh;
  background-color: ${ColorsApp.slateTransparent};
  border: 0.1px solid #fff;
  border-radius: 20px;
  padding: 0 20px;

  .box-translate__header {
    display: flex;
    height: 80px;
    width: 100%;
    padding: 20px 0px 20px 10px;
    border-bottom: 1px solid ${ColorsApp.steel};
    color: ${ColorsApp.steel};
  }

  .box-translate__header-button {
    margin-top: 12px;
    margin-left: 2vw;
    background-color: transparent;
    border: none;
    color: ${ColorsApp.steel};
    cursor: pointer;
    border-radius: 5px;
  }

  .active {
    background-color: ${ColorsApp.slate};
    color: ${ColorsApp.whiteSmoke};
    height: 38px;
    width: 75px;
    margin-top: 6px;
    border-radius: 15px;
  }

  .box-translate__body {
    margin-top: 20px;
    position: relative;
  }

  .box-translate__body textarea {
    background: transparent;
    border-color: transparent;
    height: 20vh;
    width: 100%;
    color: white;
  }

  .box-translate__body span {
    display: block;
    position: absolute;
    right: 0;
    color: ${ColorsApp.steel};
  }

  .box-translate__footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .box-translate__footer div {
    display: flex;
  }

  .box-translate__footer-span {
    border: 2px solid ${ColorsApp.steel};
    border-radius: 10px;
    display: flex;
    height: 35px;
    width: 37px;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  .box-translate__footer-img {
    height: 23px;
  }

  .box-translate__footer-button {
    width: 10vw;
    height: 45px;
    background: #3762e4;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
  }
  
`;