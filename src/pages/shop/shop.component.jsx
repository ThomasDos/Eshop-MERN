import React, { Component } from "react";
import CollectionsOverview from "./../../components/collections-overview/collections-overview.component";

import { Route } from "react-router-dom";
import CollectionPage from "../Collection/collection.component";
import { ShopPageContainer } from "./shop.styles";
import { updateCollections } from "./../../redux/shop/shop.actions";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
