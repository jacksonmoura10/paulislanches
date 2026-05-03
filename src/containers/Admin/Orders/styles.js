import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #111;
    margin-bottom: 8px;
    letter-spacing: -0.3px;
  }

  p {
    font-size: 14px;
    color: #777;
    margin-bottom: 24px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 13px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
      margin-bottom: 18px;
    }
  }
`;

export const OrderCard = styled.div`
  background: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.03),
    0 8px 24px rgba(0, 0, 0, 0.02);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 18px;
    border-radius: 14px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 12px;
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }
`;

export const CustomerName = styled.p`
  margin-top: 6px;
  margin-bottom: 0;
  font-size: 14px;
  color: #666;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const ProductItem = styled.div`
  padding: 13px 14px;
  border-radius: 10px;
  background: #fafafa;
  border: 1px solid #f3f3f3;
  font-size: 14px;
  color: #222;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 11px 12px;
  }
`;

export const StatusSelect = styled.select`
  min-width: 230px;
  padding: 12px 14px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  font-size: 14px;
  background: #fff;
  cursor: pointer;
  outline: none;
  transition: 0.2s ease;

  &:focus {
    border-color: #dcdcdc;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 11px 12px;
  }
`;

export const TotalValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111;
  padding-top: 14px;
  border-top: 1px solid #f1f1f1;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;
