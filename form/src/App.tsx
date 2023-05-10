import React from "react";
import logo from "./logo.svg";
import Form from "./Components/Form";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Form onSend={(v) => console.log(v)}></Form>
      </div>
    </div>
  );
}
