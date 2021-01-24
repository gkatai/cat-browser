import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { loadingStates } from "../../helpers/loading-states";
import { getImagesMetadata } from "./grid-slice";

const Grid = ({ count }) => {
  const dispatch = useDispatch();
  const gridData = useSelector((state) => state.grid);
  useEffect(() => {
    dispatch(getImagesMetadata(count));
  }, []);

  return (
    <>
      <h1>Grid</h1>
      {renderGridBody(gridData)}
    </>
  );
};

function renderGridBody(gridData) {
  switch (gridData.status) {
    case loadingStates.loaded:
      return <LoadedGrid imagesMetadata={gridData.imagesMetadata} />;
    case loadingStates.loading:
    default:
      return <LoadingGrid />;
  }
}

Grid.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Grid;

function LoadedGrid({ imagesMetadata }) {
  return (
    <>
      <div>GridData</div>
      {imagesMetadata.map((im, index) => (
        <img key={im.id} alt={`cat-image-${index}`} />
      ))}
    </>
  );
}

LoadedGrid.propTypes = {
  imagesMetadata: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

function LoadingGrid() {
  return <div role="grid-metadata-loader">Loading...</div>;
}
