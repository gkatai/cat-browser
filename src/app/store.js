import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";

const store = configureStore({
  reducer: rootReducer,
});

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development" && module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept("./root-reducer", () => {
    store.replaceReducer(rootReducer);
  });
}

export default store;
