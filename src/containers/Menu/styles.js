import styled from 'styled-components';
import bannerMenu from '../../assets/banner-menu.png';
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
  min-height: 220px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 80px;
  position: relative;

  background:
    linear-gradient(
      to right,
      rgba(2, 6, 23, 0.95) 0%,
      rgba(2, 6, 23, 0.78) 45%,
      rgba(2, 6, 23, 0.3) 100%
    ),
    url(${bannerMenu});

  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;

  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  div {
    max-width: 500px;
    z-index: 2;
  }

  h1 {
    margin: 0;
    font-size: clamp(32px, 5vw, 56px);
    line-height: 1;
    color: #fff;
    font-weight: 800;
    max-width: 420px;
  }

  p {
    margin-top: 14px;
    font-size: clamp(14px, 2vw, 18px);
    color: #e2e8f0;
    max-width: 320px;
  }

  @media (max-width: 768px) {
    min-height: 200px;
    padding: 0 30px;

    h1 {
      font-size: 34px;
      max-width: 300px;
    }

    p {
      font-size: 15px;
      max-width: 250px;
    }
  }

  @media (max-width: 600px) {
    min-height: 180px;
    padding: 20px;
    align-items: center;

    background:
      linear-gradient(
        to right,
        rgba(2, 6, 23, 0.88) 0%,
        rgba(2, 6, 23, 0.65) 55%,
        rgba(2, 6, 23, 0.35) 100%
      ),
      url(${bannerMenu});

    background-size: cover;
    background-position: center;

    h1 {
      font-size: 30px;
      max-width: 250px;
    }

    p {
      margin-top: 10px;
      font-size: 14px;
      max-width: 220px;
    }
  }

  @media (max-width: 380px) {
    min-height: 170px;

    h1 {
      font-size: 26px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin: 24px 0 24px 40px;
  padding: 10px 18px;

  border: none;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.08);
  color: #e2e8f0;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    margin: 20px 0 20px 20px;
    padding: 9px 16px;
    font-size: 13px;
  }
`;

export const CategoryMenu = styled.div`
  width: 100%;
  max-width: 1180px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  margin: 0 auto 34px;
  padding: 0 20px;

  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: unset;
    gap: 10px;
    padding: 0 16px;
  }
`;

export const CategoryButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 10px 16px;
  white-space: nowrap;

  background: ${({ $isActiveCategory }) =>
    $isActiveCategory ? '#22d3ee' : 'rgba(255, 255, 255, 0.08)'};

  color: ${({ $isActiveCategory }) =>
    $isActiveCategory ? '#082f49' : '#e2e8f0'};

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ $isActiveCategory }) =>
      $isActiveCategory ? '#22d3ee' : 'rgba(255, 255, 255, 0.14)'};
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px 14px;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1400px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 280px));
  justify-content: center;
  gap: 32px 64px;

  margin: 0 auto;
  padding: 0 20px 60px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(220px, 280px));
    gap: 28px 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(220px, 320px);
    gap: 24px;
  }
`;