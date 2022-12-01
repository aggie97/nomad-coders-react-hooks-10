import React from "react";
import "./App.css";
import { useInput } from "./customHooks/useInput";

const App = () => {
  const maxLenth = (value) => !value.includes("@");
  const name = useInput("Mr. ", maxLenth);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
};

export default App;
