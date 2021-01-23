import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import { render as rtlRender } from "@testing-library/react";
import "whatwg-fetch";

import rootReducer from "../src/app/rootReducer";

function render(
  ui,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.node,
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
