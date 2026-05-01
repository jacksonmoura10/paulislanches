import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 28px;
    margin-bottom: 30px;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 16px;

    h2 {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`;

export const Form = styled.form`
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    padding: 18px;
    border-radius: 12px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #444;
  }

  input[type='text'],
  input[type='number'],
  input[type='file'],
  input:not([type='checkbox']),
  select {
    width: 100%;
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
    transition: 0.2s;
    background: #fff;
  }

  input:focus,
  select:focus {
    border-color: #ff9000;
  }

  input[type='checkbox'] {
    width: auto;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    margin-bottom: 18px;

    label {
      font-size: 14px;
    }

    input[type='text'],
    input[type='number'],
    input[type='file'],
    input:not([type='checkbox']),
    select {
      padding: 12px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;

    label {
      font-size: 13px;
    }

    input[type='text'],
    input[type='number'],
    input[type='file'],
    input:not([type='checkbox']),
    select {
      padding: 10px;
      font-size: 13px;
      border-radius: 8px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background: #ff9000;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
    border-radius: 10px;
  }
`;