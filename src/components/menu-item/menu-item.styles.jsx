import styled, { css } from "styled-components";
const sizeSmall = css`
  height: 20rem;
`;

const sizeLarge = css`
  height: 32rem;
`;

const getSize = (props) => {
  return props.size === "large" ? sizeLarge : sizeSmall;
};

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => `url(${props.imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 5rem;
  padding: 0 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const TitleContainer = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 1.5rem;
  color: #4a4a4a;
`;

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 1rem;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  ${getSize}

  &:hover {
    cursor: pointer;

    & ${BackgroundImageContainer} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & ${ContentContainer} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
