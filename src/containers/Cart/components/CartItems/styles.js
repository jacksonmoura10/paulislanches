import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
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

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #111827;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const Quantity = styled.span`
  font-size: 15px;
  color: #6b7280;
  margin-top: 4px;
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: 800;
  color: #16a34a;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;