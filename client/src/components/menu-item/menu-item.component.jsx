import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
  return (
    <MenuItemContainer size={size} onClick={() => history.push("/" + linkUrl)}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
