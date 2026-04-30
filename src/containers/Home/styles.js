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
      rgba(2, 6, 23, 0.75) 45%,
      rgba(2, 6, 23, 0.25) 100%
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
    font-size: clamp(42px, 6vw, 72px);
    line-height: 0.95;
    color: #fff;
    font-weight: 800;
    max-width: 500px;
  }

  p {
    margin-top: 18px;
    margin-bottom: 28px;
    font-size: clamp(15px, 2vw, 18px);
    line-height: 1.5;
    color: #e2e8f0;
    max-width: 420px;
  }

  button {
    padding: 14px 26px;
    border: none;
    border-radius: 14px;
    background: linear-gradient(90deg, #22c55e, #16a34a);
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;

    box-shadow: 0 10px 25px rgba(34, 197, 94, 0.25);

    &:hover {
      transform: translateY(-3px);
      background: linear-gradient(90deg, #16a34a, #15803d);
      box-shadow: 0 14px 28px rgba(34, 197, 94, 0.35);
    }

    &:active {
      transform: scale(0.97);
    }
  }

  @media (max-width: 900px) {
    min-height: 380px;
    padding: 0 40px;

    background:
      linear-gradient(
        to right,
        rgba(2, 6, 23, 0.96) 0%,
        rgba(2, 6, 23, 0.82) 55%,
        rgba(2, 6, 23, 0.45) 100%
      ),
      url(${bannerHome});

    background-size: cover;
    background-position: center;

    button {
      padding: 13px 22px;
    }
  }

  @media (max-width: 600px) {
    min-height: 360px;
    padding: 40px 22px;
    align-items: flex-end;

    background:
      linear-gradient(
        to bottom,
        rgba(2, 6, 23, 0.35) 0%,
        rgba(2, 6, 23, 0.72) 45%,
        rgba(2, 6, 23, 0.98) 100%
      ),
      url(${bannerHome});

    background-size: cover;
    background-position: center top;

    div {
      max-width: 100%;
    }

    h1 {
      max-width: 360px;
      line-height: 1;
    }

    p {
      max-width: 320px;
      margin-top: 14px;
      margin-bottom: 22px;
    }

    button {
      width: 100%;
      max-width: 240px;
      padding: 14px 20px;
      font-size: 14px;
    }
  }

  @media (max-width: 380px) {
    padding: 36px 18px;

    h1 {
      font-size: 38px;
    }

    button {
      max-width: 100%;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 0;
`;