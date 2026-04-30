import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 280px;
  min-height: 360px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 22px;
  border-radius: 18px;

  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .info {
    width: 100%;
    min-height: 72px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;

    margin-top: 14px;
  }

  p {
    font-size: 16px;
    color: #ff8c05;
    font-weight: 600;
    text-align: center;
    line-height: 22px;
    margin: 0;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  strong {
    display: block;
    font-size: 20px;
    color: #363636;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 240px;
    min-height: 330px;
    padding: 18px;

    p {
      font-size: 15px;
      line-height: 20px;
    }

    strong {
      font-size: 18px;
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
    min-height: 320px;
    padding: 18px 16px;
    border-radius: 16px;

    p {
      font-size: 14px;
      line-height: 20px;
    }

    strong {
      font-size: 17px;
    }
  }

  @media (max-width: 380px) {
    min-height: 300px;
    padding: 16px 14px;

    p {
      font-size: 13px;
    }

    strong {
      font-size: 16px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 768px) {
    height: 140px;
  }

  @media (max-width: 600px) {
    height: 130px;
  }

  @media (max-width: 380px) {
    height: 120px;
  }
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;

  transition: transform 0.3s ease;

  ${Container}:hover & {
    transform: scale(1.05);
  }
`;