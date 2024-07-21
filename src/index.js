import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



let App = () => {
  return (
    <>
      <h1>hello</h1>
      <Header/>
      <Body/>
    </>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


