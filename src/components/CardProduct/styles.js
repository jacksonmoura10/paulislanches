import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  border-radius: 16px;

  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .info {
    width: 100%;
    min-height: 60px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;

    margin-top: 10px;
  }

  p {
    font-size: 16px;
    color: #ff8c05;
    font-weight: 600;
    text-align: center;
    line-height: 20px;
    margin: 0;

    /* limita o nome em 2 linhas */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  strong {
    font-size: 18px;
    color: #363636;
    font-weight: 700;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
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
