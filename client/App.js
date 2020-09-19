import React from 'react';
import { Provider } from "react-native-paper";
import App from "./src";
import { theme } from "./src/core/theme";
import store from "./src/store";
import { Provider as StoreProvider } from "react-redux";

const Main = () => (
  <StoreProvider store={store}>
  <Provider theme={theme}>
      <App />
  </Provider>
  </StoreProvider>
);

export default Main;


