import styled from 'styled-components';
import bannerHome from '../../assets/banner-home.png';
import Fundo from '../../assets/fundo.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background:
    linear-gradient(rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 1)),
    url(${Fundo});

  background-size: cover;
  background-position: center;
  padding-bottom: 50px;
`;

export const Banner = styled.div`
  width: 100%;
  min-height: 420px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 90px;
  position: relative;

  background:
    linear-gradient(
      to right,
      rgba(2, 6, 23, 0.95) 0%,
      rgba(2, 6, 23, 0.75) 40%,
      rgba(2, 6, 23, 0.2) 100%
    ),
    url(${bannerHome});

  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;

  div {
    max-width: 520px;
    z-index: 2;
  }

  h1 {
    margin: 0;
    font-size: 72px;
    line-height: 0.95;
    color: #fff;
    font-weight: 800;
    max-width: 500px;
  }

  p {
    margin-top: 18px;
    margin-bottom: 28px;
    font-size: 18px;
    line-height: 1.5;
    color: #e2e8f0;
    max-width: 420px;
  }

  button {
    padding: 12px 22px;
    border: none;
    border-radius: 12px;
    background: #22c55e;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background: #65a30d;
      transform: translateY(-2px);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 0;
`;