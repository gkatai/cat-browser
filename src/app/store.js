import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development" && module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept("./rootReducer", () => {
    store.replaceReducer(rootReducer);
  });
}

export default store;
