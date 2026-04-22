import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 8px;

  background: linear-gradient(90deg, #a855f7, #9333ea);
  color: #fff;

  cursor: pointer;
  transition: all 0.3s ease;

  /* sombra leve */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  /* ícone */
  svg {
    font-size: 18px;
  }

  /* hover */
  &:hover {
    background: linear-gradient(90deg, #9333ea, #7e22ce);
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
  }

  /* clique */
  &:active {
    transform: scale(0.95);
  }
`;