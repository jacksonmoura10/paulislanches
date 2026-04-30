import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;

  width: 100%;
  background: rgba(2, 6, 23, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 70px;
  margin: 0 auto;
  padding: 0 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    min-height: 64px;
    padding: 0 16px;
    gap: 12px;
  }

  @media (max-width: 420px) {
    padding: 0 12px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  min-width: 0;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  hr {
    width: 1px;
    height: 22px;
    border: none;
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 520px) {
    div {
      gap: 12px;
    }

    hr {
      height: 18px;
    }
  }
`;

export const HeaderLink = styled(NavLink)`
  position: relative;
  text-decoration: none;

  color: #cbd5e1;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2px;
  white-space: nowrap;

  transition: all 0.3s ease;

  &:hover {
    color: #22c55e;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: #ffffff;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 3px;
        border-radius: 999px;
        background: #22c55e;
        box-shadow: 0 0 12px rgba(34, 197, 94, 0.35);
      }
    `}

  @media (max-width: 520px) {
    font-size: 13px;

    ${({ $isActive }) =>
      $isActive &&
      css`
        &::after {
          bottom: -8px;
        }
      `}
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 520px) {
    gap: 12px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f8fafc;

  svg {
    flex-shrink: 0;
    opacity: 0.95;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 1.05;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #cbd5e1;
    font-weight: 500;
  }

  span {
    color: #ffffff;
    font-weight: 700;
  }

  @media (max-width: 650px) {
    div {
      display: none;
    }
  }
`;

export const Logout = styled.button`
  margin: 2px 0 0;
  padding: 0;
  border: none;
  background: transparent;

  width: fit-content;

  color: #22c55e;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    color: #4ade80;
    text-decoration: underline;
  }
`;

export const LinkContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 8px;

  color: #f8fafc;
  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    color: #22c55e;
    transform: translateY(-1px);
  }

  svg {
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
  }

  @media (max-width: 520px) {
    gap: 0;

    span {
      display: none;
    }
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;

  min-width: 18px;
  height: 18px;
  padding: 0 5px;

  border-radius: 999px;

  background: #22d3ee;
  color: #0f172a;

  font-size: 11px;
  font-weight: 800;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 0 2px #020617;

  animation: pop 0.25s ease;

  @media (max-width: 520px) {
    top: -9px;
    right: -9px;
  }

  @keyframes pop {
    0% {
      transform: scale(0.6);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;