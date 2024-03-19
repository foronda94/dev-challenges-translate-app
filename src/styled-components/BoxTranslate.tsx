import styled from "styled-components";
import { ColorsApp } from "../utilies/ColorApp";

export const Box = styled.div<{ background: string }>`
  height: auto;
  background-color: ${props => props.background || ColorsApp.slateTransparent};
  border: 0.1px solid ${ColorsApp.steel};
  border-radius: 20px;
  padding: 0 20px 20px;

  .box-header__display-translation {
    width: 30vw;
    display: flex;
    justify-content: space-between;
  }

  .box-header__display {
    width: 20vw;
  }

  .box-translate__header {
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 20px 0px 20px 10px;
    border-bottom: 1px solid ${ColorsApp.steel};
    color: ${ColorsApp.steel};
  }

  .box-translate__header-button {
    margin-top: 12px;
    background-color: transparent;
    border: none;
    color: ${ColorsApp.steel};
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
  }

  .box-translate__header-button-expandDown {
    margin-top: 17px;
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
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  .box-translate__footer div {
    display: flex;
    align-items: center;
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

  .mt-2 {
    margin-top: 8px;
  }

  .box-translate__footer-img {
    height: 23px;
  }

  .box-translate__footer-button {
    width: 150px;
    height: 45px;
    background: ${ColorsApp.blueAzure};
    border: 1px solid ${ColorsApp.babyBlue};
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
  }

  @media (max-width: 1024px) {
    .box-header__display-translation {
      width: 40vw;
      display: flex;
      justify-content: space-between;
    }

    .box-header__display {
      width: 30vw;
    }
  }

  @media (max-width: 640px) {
    .box-header__display-translation {
      width: 60vw;
      display: flex;
      justify-content: space-between;
    }

    .box-header__display {
      width: 40vw;
    }
  }
  
`;