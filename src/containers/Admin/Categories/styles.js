import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #111;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #777;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: stretch;
    gap: 16px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 14px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
  background: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 14px;
  overflow: hidden;
`;

export const Thead = styled.thead`
  background: #fafafa;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid #f1f1f1;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #fcfcfc;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 16px;
  font-size: 13px;
  font-weight: 600;
  color: #777;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const Td = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #111;
  vertical-align: middle;
  white-space: nowrap;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

export const ActionButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: 0.2s;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 8px 14px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 7px 12px;
    font-size: 11px;
    border-radius: 8px;
  }
`;

export const CategoryImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

export const CategoryCardMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const CategoryCard = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 16px;
  border: 1px solid #f1f1f1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const CategoryCardInfo = styled.div`
  margin-top: 14px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 14px;
    color: #111;
  }
`;
