import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  min-height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 16px;

  border: none;
  border-radius: 12px;

  background: linear-gradient(90deg, #a855f7, #9333ea);
  color: #fff;

  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  cursor: pointer;
  transition: all 0.3s ease;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  svg {
    font-size: 18px;
    flex-shrink: 0;
  }

  &:hover {
    background: linear-gradient(90deg, #9333ea, #7e22ce);
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.96);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    min-height: 42px;
    font-size: 13px;
    padding: 10px 14px;

    svg {
      font-size: 17px;
    }
  }

  @media (max-width: 600px) {
    min-height: 44px;
    font-size: 13px;
    padding: 10px 12px;

    svg {
      font-size: 16px;
    }
  }

  @media (max-width: 380px) {
    min-height: 40px;
    font-size: 12px;
    padding: 8px 10px;
  }
`;