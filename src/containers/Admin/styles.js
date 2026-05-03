import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #f7f8fa;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  width: 260px;
  min-width: 260px;
  background: #111;
  color: white;
  padding: 28px 22px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 32px;
    letter-spacing: -0.4px;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex: 1;
  }

  nav a {
    color: #dcdcdc;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    padding: 12px 14px;
    border-radius: 10px;
    transition: 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    padding: 20px 16px;

    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    nav {
      gap: 10px;
    }

    nav a {
      font-size: 14px;
      padding: 10px 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 18px 14px;

    h2 {
      font-size: 18px;
    }

    nav a {
      font-size: 13px;
      padding: 9px 11px;
      border-radius: 8px;
    }
  }
`;

export const BackButton = styled.button`
  margin-top: 32px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  color: #dcdcdc;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 12px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 9px 11px;
    border-radius: 8px;
  }
`;

export const Main = styled.div`
  flex: 1;
  background: #f7f8fa;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background: white;
  padding: 22px 28px;
  border-bottom: 1px solid #ececec;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #111;
    letter-spacing: -0.4px;
  }

  @media (max-width: 768px) {
    padding: 18px 16px;

    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 14px;

    h1 {
      font-size: 18px;
    }
  }
`;

export const Content = styled.section`
  padding: 28px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 18px 16px;
  }

  @media (max-width: 480px) {
    padding: 14px 12px;
  }
`;