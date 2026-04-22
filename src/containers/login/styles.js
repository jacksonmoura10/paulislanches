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
    radial-gradient(
      circle at top left,
      rgba(34, 211, 238, 0.08),
      transparent 22%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(37, 99, 235, 0.08),
      transparent 22%
    ),
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
  background:
    linear-gradient(rgba(2, 6, 23, 0.75), rgba(2, 6, 23, 0.9)),
    url(${BackgroudFile});
  background-size: cover;
  background-position: center;
  border-right: 1px solid rgba(255, 255, 255, 0.04);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top left,
      rgba(34, 211, 238, 0.16),
      transparent 42%
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at bottom right,
      rgba(37, 99, 235, 0.16),
      transparent 42%
    );
    pointer-events: none;
  }

  img {
    width: 420px;
    max-width: 70%;
    position: relative;
    z-index: 1;
    opacity: 0.95;
    filter: drop-shadow(0 0 24px rgba(34, 211, 238, 0.18));
    transition:
      transform 0.3s ease,
      filter 0.3s ease;
  }

  img:hover {
    transform: scale(1.03);
    filter: drop-shadow(0 0 30px rgba(34, 211, 238, 0.24));
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 24px;
  position: relative;

  background:
    radial-gradient(
      circle at top right,
      rgba(34, 211, 238, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(37, 99, 235, 0.08),
      transparent 30%
    ),
    linear-gradient(rgba(15, 23, 42, 0.92), rgba(11, 17, 32, 0.96)),
    url(${BackgroudFundo});
  background-size: cover;
  background-position: center;

  > * {
    position: relative;
    z-index: 1;
  }

  p {
    margin-top: 18px;
    font-size: 0.95rem;
    font-weight: 400;
    color: #cbd5e1;
    text-align: center;
    line-height: 1.5;
  }

  a {
    color: #22d3ee;
    font-weight: 700;
    text-decoration: none;
    transition:
      color 0.2s ease,
      text-decoration 0.2s ease;
  }

  a:hover {
    color: #67e8f9;
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    min-height: 100vh;
    padding: 24px 16px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.25;
  color: #f8fafc;
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -0.02em;

  span {
    color: #22d3ee;
  }

  @media (max-width: 900px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: #94a3b8;
  text-align: center;
  margin: 0 0 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 420px;
  padding: 28px;
  border-radius: 20px;
  background: rgba(2, 6, 23, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(14px);

  @media (max-width: 900px) {
    max-width: 100%;
    padding: 24px 20px;
    border-radius: 18px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  label {
    font-size: 13px;
    font-weight: 600;
    color: #cbd5e1;
    letter-spacing: 0.02em;
  }

  input {
    width: 100%;
    height: 48px;
    border-radius: 10px;
    padding: 0 14px;
    border: 1px solid #334155;
    background: rgba(15, 23, 42, 0.9);
    color: #f8fafc;
    font-size: 14px;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background 0.2s ease;
  }

  input::placeholder {
    color: #64748b;
  }

  input:hover {
    border-color: #475569;
  }

  input:focus {
    outline: none;
    border-color: #22d3ee;
    background: rgba(15, 23, 42, 1);
    box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.14);
  }

  p {
    margin: 2px 0 0;
    font-size: 12px;
    line-height: 1.2;
    color: #ef4444;
    text-align: left;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #22d3ee;
  font-weight: 600;
  margin-left: 4px;
  transition:
    color 0.2s ease,
    text-decoration 0.2s ease;

  &:hover {
    color: #67e8f9;
    text-decoration: underline;
  }
`;
