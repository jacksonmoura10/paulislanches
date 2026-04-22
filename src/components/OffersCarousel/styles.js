import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 40px 12px;

  .carousel-items {
    padding-right: 20px;
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
  }

  .react-multi-carousel-arrow--left {
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .react-multi-carousel-arrow--right {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #22c55e;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 48px 0 24px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #22c55e;
    left: calc(50% - 28px);
    border-radius: 999px;
  }
`;