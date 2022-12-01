import React from "react";
import "./App.css";
import { useInput } from "./customHooks/useInput";

const App = () => {
  const name = useInput("Mr. ");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
};

export default App;
