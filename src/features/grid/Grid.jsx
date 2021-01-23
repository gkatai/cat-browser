import React, { useEffect } from "react";

const Grid = () => {
  useEffect(() => {
    fetch("//api.thecatapi.com/v1/images/search?limit=5")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <h1>Grid</h1>;
};

export default Grid;
