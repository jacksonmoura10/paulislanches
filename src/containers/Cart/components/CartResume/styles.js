import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  height: fit-content;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    padding: 18px;

    h3 {
      font-size: 20px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  span {
    color: #6b7280;
    font-size: 16px;
  }

  strong {
    font-size: 26px;
    color: #111827;
    font-weight: 800;
  }
`;

export const Total = styled.div``;

export const Button = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 10px;

  background: linear-gradient(135deg, #22d3ee, #2563eb);
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
  }
`;