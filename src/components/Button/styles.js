import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 999px;

  background: #22c55e;
  color: #fff;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    font-size: 18px;
  }

  &:hover {
    background: #16a34a;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`;