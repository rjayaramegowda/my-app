import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.querySelectorAll(".root")[0] as HTMLElement;
const rootElement2 = document.querySelectorAll(".root")[1] as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <>
      <App component={rootElement.dataset.component} />
    </>
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(rootElement2);
root2.render(
  <React.StrictMode>
    <>
      <App component={rootElement2.dataset.component} />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
