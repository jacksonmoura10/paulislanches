import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #0f172a;
  padding: 40px 16px;
`;

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: #22c55e;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 32px;
`;

export const EmptyMessage = styled.p`
  color: #cbd5e1;
  font-size: 16px;
`;

export const OrderCard = styled.div`
  background: #1e293b;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const OrderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const OrderId = styled.strong`
  color: #f8fafc;
  font-size: 16px;
`;

export const OrderStatus = styled.span`
  background: ${({ color }) => color}22;
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color}55;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  color: #cbd5e1;
  font-size: 14px;

  strong {
    color: #f8fafc;
    flex: 1;
  }

  span {
    margin-left: 16px;
  }
`;

export const TotalValue = styled.p`
  color: #f8fafc;
  font-size: 16px;
  font-weight: 700;
  text-align: right;
  margin: 0;
`;