import styled from 'styled-components';
import backImg from '../assets/img/hero_img.jpg';

export const Translate = styled.div`
  background-image: url(${backImg});
  background-size: cover;
  background-position: center;
  min-height: 100vh;

  .container__logo {
    text-align: center;
    padding-top: 80px;
  }
`;