import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 40px 30px;

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

  @media (max-width: 768px) {
    padding: 0 20px 24px;

    .carousel-items {
      padding-right: 14px;
    }
  }

  @media (max-width: 600px) {
    padding: 0 16px 20px;

    .carousel-items {
      padding-right: 10px;
    }

    .react-multi-carousel-arrow {
      min-width: 34px;
      min-height: 34px;
    }

    .react-multi-carousel-arrow--left {
      left: 0;
    }

    .react-multi-carousel-arrow--right {
      right: 0;
    }
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

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 36px 0 22px;
  }

  @media (max-width: 600px) {
    font-size: 22px;
    margin: 30px 0 18px;
    padding-bottom: 10px;

    &::after {
      width: 44px;
      height: 3px;
      left: calc(50% - 22px);
    }
  }

  @media (max-width: 380px) {
    font-size: 20px;
  }
`;