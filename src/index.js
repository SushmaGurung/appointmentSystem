import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs" >
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);
