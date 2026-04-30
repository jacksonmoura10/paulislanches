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
    border-radius: 14px;

    h3 {
      font-size: 20px;
    }
  }

  @media (max-width: 420px) {
    padding: 14px;
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
  border: 1px solid #f1f5f9;
  border-radius: 12px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    grid-template-columns: 76px 1fr;
    gap: 12px;
    padding: 14px;
  }

  @media (max-width: 420px) {
    grid-template-columns: 68px 1fr;
    gap: 10px;
    padding: 12px;
  }
`;

export const Image = styled.img`
  width: 90px;
  height: 75px;
  object-fit: cover;
  border-radius: 12px;
  background: #f1f5f9;

  @media (max-width: 768px) {
    width: 76px;
    height: 68px;
    border-radius: 10px;
  }

  @media (max-width: 420px) {
    width: 68px;
    height: 62px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #111827;

  @media (max-width: 768px) {
    font-size: 16px;
  }
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
    margin-top: 6px;
    flex-wrap: wrap;

    button {
      height: 34px;
      min-width: 34px;
      padding: 0 10px;
    }
  }
`;

export const RemoveButton = styled.button`
  background: #fee2e2 !important;
  color: #b91c1c !important;

  @media (max-width: 420px) {
    flex: 1;
  }
`;

export const Price = styled.span`
  font-size: 22px;
  font-weight: 800;
  color: #16a34a;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    text-align: left;
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;