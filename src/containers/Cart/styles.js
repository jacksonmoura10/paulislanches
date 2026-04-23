import styled from 'styled-components';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%);
`;

export const Banner = styled.div`
  width: 100%;
  height: 180px;
  background:
    linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.45)),
    url(${Texture});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);

  img {
    width: 120px;
    filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.25));
  }

  @media (max-width: 768px) {
    height: 150px;

    img {
      width: 95px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 800;
  color: #166534;
  text-align: center;
  margin: 32px 0 8px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    border-radius: 999px;
    background: #22c55e;
    margin: 10px auto 0;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 24px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 40px auto 0;
  padding: 0 20px 40px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 16px 32px;
    margin-top: 28px;
  }
`;