import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { storeConfig } from "./components/store/store.jsx";
import { persistStore } from "redux-persist";
import App from "./App";
import { PersistGate } from "redux-persist/lib/integration/react";

const store = storeConfig();

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={<div>loading...</div>} persistor={persistor}>
  
  <App />
  </PersistGate>
  </Provider>,
  document.getElementById("root")
);
