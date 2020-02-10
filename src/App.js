import React from 'react';
import './App.scss';
import Navigation from "./Navigation/Navigation";
import Home from "./containers/home/Home";
import {BrowserRouter, Route} from "react-router-dom";
import Coffee from "./Coffee/Coffee";

function App() {
  return (
      <BrowserRouter>
          <div className="container h-100">
              <div className="d-flex flex-column h-100">
                  <div className="row">
                      <div className="col col-12">
                          <Navigation/>
                      </div>
                  </div>
                  <div className="row flex-grow-1">
                      <div className="col col-12">
                          <Route exact path="/" component={Home}></Route>
                          <Route exact path="/coffee" component={Coffee}></Route>
                      </div>
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
