import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import stores from "./reducers";

const store = createStore(
  // 내가 만든 reducer
  stores,
  // redux devtools를 활성화
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // react-redux의 provider를 통하여 store를 연결
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
