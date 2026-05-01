import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 560px;

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #111;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: #fff;
  padding: 28px;
  border-radius: 14px;
  border: 1px solid #f1f1f1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    padding: 20px;
    gap: 14px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 13px;
    font-weight: 600;
    color: #555;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input[type="text"],
  input[type="number"],
  input:not([type="checkbox"]):not([type="file"]) {
    padding: 10px 14px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    font-size: 14px;
    color: #111;
    outline: none;
    transition: border 0.2s;

    &:focus {
      border-color: #111;
    }
  }

  input[type="file"] {
    font-size: 13px;
    color: #555;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #111;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  margin-top: 4px;

  &:hover {
    background: #333;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 11px;
    font-size: 13px;
  }
`;