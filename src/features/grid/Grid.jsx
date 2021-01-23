import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getImagesMetadata } from "./grid-slice";

const Grid = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImagesMetadata());
  }, []);

  return <h1>Grid</h1>;
};

export default Grid;
