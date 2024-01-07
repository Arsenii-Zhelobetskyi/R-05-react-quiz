import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { QuizProvider } from "./context/QuizContext";
// import BankAccount from "./challenge/BankAccount";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
    {/* <BankAccount /> */}
  </React.StrictMode>
);
