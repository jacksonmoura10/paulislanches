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
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    padding: 18px;

    h3 {
      font-size: 20px;
    }
  }
`;

export const EmptyCart = styled.p`
  color: #6b7280;
  font-size: 15px;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr auto auto;
  gap: 16px;
  align-items: center;

  padding: 16px;
  margin-bottom: 12px;

  background: #ffffff;
  border-radius: 12px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    align-items: flex-start;
  }
`;
export const Image = styled.img`
  width: 90px;
  height: 75px;
  object-fit: cover;
  border-radius: 12px;
  background: #f1f5f9;

  @media (max-width: 768px) {
    width: 80px;
    height: 70px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

export const Quantity = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    min-width: 36px;
    height: 36px;
    border: none;
    border-radius: 8px;
    background: #e5e7eb;
    color: #111827;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease;
    padding: 0 12px;
  }

  span {
    min-width: 24px;
    text-align: center;
    font-weight: 800;
    color: #111827;
  }

  button:hover {
    filter: brightness(0.95);
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    margin-top: 8px;
  }
`;

export const RemoveButton = styled.button`
  background: #fee2e2 !important;
  color: #b91c1c !important;
`;

export const Price = styled.span`
  font-size: 22px;
  font-weight: 800;
  color: #16a34a;
  text-align: right;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    text-align: left;
    font-size: 20px;
  }
`;