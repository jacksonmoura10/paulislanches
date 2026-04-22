import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  padding: 0 40px 20px;

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
`;