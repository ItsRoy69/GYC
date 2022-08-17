import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingBody from "./components/LandingBody";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  
  return (
    <div className="mainBody">
      <Navbar></Navbar>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingBody} />          
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
