import React from "react";
import CollectionsOverview from "./../../components/collections-overview/collections-overview.component";

import { Route } from "react-router-dom";
import CollectionPage from "../Collection/collection.component";
import { ShopPageContainer } from "./shop.styles";

const ShopPage = ({ match }) => (
  <ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </ShopPageContainer>
);

export default ShopPage;
