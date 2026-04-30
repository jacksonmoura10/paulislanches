import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 20px;

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
  line-height: 1;

  cursor: pointer;
  transition: all 0.3s ease;

  white-space: nowrap;

  svg {
    font-size: 18px;
    flex-shrink: 0;
  }

  &:hover {
    background: #16a34a;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 11px 18px;
    font-size: 14px;

    svg {
      font-size: 17px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    min-height: 44px;
    padding: 10px 16px;
    font-size: 14px;

    svg {
      font-size: 16px;
    }
  }

  @media (max-width: 380px) {
    min-height: 42px;
    font-size: 13px;
    padding: 10px 14px;
  }
`;