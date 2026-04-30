import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  height: fit-content;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  position: sticky;
  top: 96px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 18px;
  }

  @media (max-width: 900px) {
    position: static;
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

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;

  span {
    color: #6b7280;
    font-size: 16px;
  }

  strong {
    font-size: 22px;
    color: #111827;
    font-weight: 800;
    text-align: right;
  }

  @media (max-width: 420px) {
    span {
      font-size: 14px;
    }

    strong {
      font-size: 19px;
    }
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
  }

  input,
  select {
    width: 100%;
    height: 44px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 0 12px;
    font-size: 14px;
    color: #111827;
    background: #fff;
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  input:focus,
  select:focus {
    border-color: #22d3ee;
    box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.16);
  }

  @media (max-width: 420px) {
    input,
    select {
      height: 48px;
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  min-height: 52px;
  border: none;
  border-radius: 10px;
  margin-top: 12px;
  padding: 0 14px;

  background: ${({ $secondary }) =>
    $secondary ? '#e5e7eb' : 'linear-gradient(135deg, #22d3ee, #2563eb)'};

  color: ${({ $secondary }) => ($secondary ? '#111827' : '#ffffff')};
  font-size: 15px;
  font-weight: 700;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $secondary }) =>
      $secondary ? 'none' : '0 8px 20px rgba(37, 99, 235, 0.3)'};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 420px) {
    min-height: 48px;
    font-size: 14px;
  }
`;