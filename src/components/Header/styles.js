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
  height: 70px;
  margin: 0 auto;
  padding: 0 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

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
`;

export const HeaderLink = styled(NavLink)`
  position: relative;
  text-decoration: none;

  color: #cbd5e1;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2px;

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
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
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
  display: flex;
  align-items: center;
  gap: 8px;

  color: #f8fafc;
  font-size: 15px;
  font-weight: 600;

  transition: all 0.3s ease;

  &:hover {
    color: #22c55e;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: inherit;
  }

  svg {
    flex-shrink: 0;
  }
`;