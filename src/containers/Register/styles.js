import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';
import BackgroudFile from '../../assets/file.svg';
import BackgroudFundo from '../../assets/fundo.svg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background:
    radial-gradient(circle at top left, rgba(34, 211, 238, 0.06), transparent 25%),
    radial-gradient(circle at bottom right, rgba(37, 99, 235, 0.06), transparent 25%),
    linear-gradient(135deg, #0f172a 0%, #111827 45%, #0b1120 100%);
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 40px;

  background:
    linear-gradient(rgba(2, 6, 23, 0.75), rgba(2, 6, 23, 0.9)),
    url(${BackgroudFile});
  background-size: cover;
  background-position: center;

  border-right: 1px solid rgba(255, 255, 255, 0.04);

  img {
    width: 420px;
    max-width: 80%;
    z-index: 1;
    filter: drop-shadow(0 0 25px rgba(34, 211, 238, 0.2));
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.04);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 24px;
  position: relative;

  background:
    radial-gradient(circle at top right, rgba(34, 211, 238, 0.08), transparent 30%),
    radial-gradient(circle at bottom left, rgba(37, 99, 235, 0.08), transparent 30%),
    linear-gradient(rgba(15, 23, 42, 0.92), rgba(11, 17, 32, 0.96)),
    url(${BackgroudFundo});
  background-size: cover;
  background-position: center;

  > * {
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 0.95rem;
    color: #cbd5e1;
    text-align: center;
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    padding: 28px 18px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.25;
  color: #f8fafc;
  text-align: center;
  margin-bottom: 6px;
  letter-spacing: -0.02em;

  span {
    color: #22d3ee;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #94a3b8;
  margin-bottom: 24px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px;
  border-radius: 20px;

  background: rgba(2, 6, 23, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);

  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #e2e8f0;
  }

  input {
    height: 48px;
    border-radius: 10px;
    padding: 0 14px;
    border: 1px solid #334155;
    background: rgba(15, 23, 42, 0.9);
    color: #f8fafc;
    font-size: 0.9rem;

    transition: 0.2s;
  }

  input::placeholder {
    color: #64748b;
  }

  input:focus {
    outline: none;
    border-color: #22d3ee;
    box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15);
  }

  p {
    font-size: 12px;
    color: #f87171;
    margin-top: 2px;
  }
`;

export const FooterText = styled.p`
  margin-top: 18px;
  font-size: 0.95rem;
  color: #cbd5e1;
`;

export const Link = styled(ReactLink)`
  color: #22d3ee;
  font-weight: 600;
  margin-left: 4px;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #67e8f9;
    text-decoration: underline;
  }
`;