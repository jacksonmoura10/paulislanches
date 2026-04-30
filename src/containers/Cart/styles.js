import styled from 'styled-components';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%);
`;

/* container geral */
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 60px;

  @media (max-width: 768px) {
    padding: 30px 16px 50px;
  }

  @media (max-width: 480px) {
    padding: 24px 14px 40px;
  }
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
  }

  @media (max-width: 768px) {
    height: 150px;

    img {
      width: 100px;
    }
  }

  @media (max-width: 480px) {
    height: 130px;

    img {
      width: 85px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 800;
  color: #166534;
  text-align: center;
  margin: 32px 0 8px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 28px 0 6px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin: 22px 0 4px;
  }
`;

/* grid principal */
export const Grid = styled.div`
  width: 100%;
  margin-top: 40px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 28px;
    gap: 16px;
  }
`;

export const BackButton = styled.button`
  margin: 20px 0 0 40px;
  background: transparent;
  border: none;

  color: #64748b;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #22c55e;
  }

  @media (max-width: 768px) {
    margin: 18px 0 0 20px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    margin: 16px 0 0 14px;
    font-size: 12px;
  }
`;