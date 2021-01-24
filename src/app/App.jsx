import React from "react";

import Counter from "../features/counter/Counter";
import Grid from "../features/grid/Grid";

const App = () => {
  return (
    <>
      <Counter />
      <Grid count={10} />
    </>
  );
};

export default App;
