import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  width: 240px;
  min-width: 240px;
  background: #111;
  color: white;
  padding: 24px 20px;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    padding: 18px 16px;
  }
`;

export const Main = styled.div`
  flex: 1;
  background: #f5f5f5;
  min-width: 0;
`;

export const Header = styled.header`
  background: white;
  padding: 20px 24px;
  border-bottom: 1px solid #eaeaea;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px;
  }
`;

export const Content = styled.section`
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;
