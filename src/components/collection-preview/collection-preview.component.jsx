import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  PreviewContainer,
  TitleContainer,
  CollectionPreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer to={`/shop/` + title.toLowerCase()}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
