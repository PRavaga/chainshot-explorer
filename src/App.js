import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Explorer from "./components/Explorer";
import Address from "./components/Address";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Explorer} />
      <Route path="/address" component={Address} />
    </BrowserRouter>
  );
};

export default App;
