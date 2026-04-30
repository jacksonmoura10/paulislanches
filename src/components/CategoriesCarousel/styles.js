import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  padding: 0 40px 30px;

  .carousel-items {
    padding-right: 20px;
  }

  .react-multi-carousel-list {
    overflow: hidden;
  }

  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
  }

  .react-multi-carousel-arrow--left {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .react-multi-carousel-arrow--right {
    right: 0;
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
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #22c55e;
  text-align: center;
  margin: 40px 0 28px;
  position: relative;
  padding-bottom: 12px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 4px;
    border-radius: 999px;
    background: #22c55e;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    margin: 32px 0 24px;
  }

  @media (max-width: 600px) {
    font-size: 22px;
    margin: 28px 0 20px;
    padding-bottom: 10px;

    &::after {
      width: 44px;
      height: 3px;
    }
  }
`;

export const ContainerItems = styled.div`
  width: 100%;
  max-width: 320px;
  height: 170px;
  border-radius: 18px;
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background: url(${({ $imageURL }) => $imageURL}) center/cover no-repeat;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(2, 6, 23, 0.8),
      rgba(2, 6, 23, 0.2),
      transparent
    );
  }

  @media (max-width: 768px) {
    max-width: 280px;
    height: 155px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    height: 145px;
    border-radius: 16px;
  }

  @media (max-width: 380px) {
    height: 135px;
  }
`;

export const CategoryButton = styled.button`
  position: relative;
  z-index: 1;

  margin-bottom: 14px;
  padding: 8px 16px;

  border: none;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);

  color: #fff;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #22c55e;
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    font-size: 13px;
    padding: 7px 14px;
    margin-bottom: 12px;
  }

  @media (max-width: 380px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;