import styled from 'styled-components';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
`;

/* container principal */
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 32px 20px 60px;

  @media (max-width: 768px) {
    padding: 24px 16px 50px;
  }

  @media (max-width: 480px) {
    padding: 20px 14px 40px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 180px;

  background:
    linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)),
    url(${Texture});

  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.06);

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
      width: 84px;
    }
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin-bottom: 24px;

  font-size: 14px;
  font-weight: 600;
  color: #64748b;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: #16a34a;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 800;
  color: #166534;
  text-align: center;
  margin-bottom: 8px;
  line-height: 1.2;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Grid = styled.div`
  width: 100%;
  margin-top: 36px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 28px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    margin-top: 22px;
  }
`;
