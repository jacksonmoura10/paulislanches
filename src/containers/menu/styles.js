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
  min-height: 320px;

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
    url(${bannerMenu});

  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;

  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  div {
    max-width: 520px;
    z-index: 2;
  }

  h1 {
    margin: 0;
    font-size: 50px;
    line-height: 0.95;
    color: #fff;
    font-weight: 800;
    max-width: 500px;
    text-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }

  p {
    margin-top: 18px;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 1.5;
    color: #e2e8f0;
    max-width: 420px;
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
`;

export const CategoryButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 10px 18px;

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
`;

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1400px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 280px));
  justify-content: center;
  gap: 32px 64px;

  margin: 0 auto;
  padding: 60 20px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(220px, 280px));
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(220px, 320px);
  }
`;