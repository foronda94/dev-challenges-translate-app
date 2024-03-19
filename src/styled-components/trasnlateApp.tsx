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

  .box-translate {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 50px 70px;
  }

  @media (max-width: 1024px) {
    .box-translate {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .box-translate {
      margin: 50px 20px;
    }
  }
`;