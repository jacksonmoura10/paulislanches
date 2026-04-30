import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 18px 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-align: center;
  flex-wrap: wrap;

  p {
    margin: 0;
    color: #cbd5e1;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
  }

  span {
    color: #22c55e;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    gap: 8px;

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;

    p {
      font-size: 13px;
      line-height: 1.5;
    }
  }

  @media (max-width: 380px) {
    p {
      font-size: 12px;
    }
  }
`;