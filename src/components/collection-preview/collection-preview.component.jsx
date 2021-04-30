import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <Link to={`/shop/` + title.toLowerCase()}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
