import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 14px;
  }
`;

export const Card = styled.div`
  background: white;
  padding: 24px;
  border-radius: 14px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.06),
    0 8px 20px rgba(0, 0, 0, 0.03);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 18px;
    border-radius: 10px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const CardNumber = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #111;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
