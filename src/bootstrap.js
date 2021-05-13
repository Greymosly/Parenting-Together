import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/app";
import reducers from "./reducers";
import { Auth0Provider } from "@auth0/auth0-react";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Auth0Provider
        domain='parenting-together.us.auth0.com'
        clientId='dZgA3HfEBYvMrU80rFCysVSpsYp1pzhj'
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
