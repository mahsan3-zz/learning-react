import React from 'react';
import './App.scss';
import Navigation from "./Navigation/Navigation";
import Home from "./Home/containers/Home";
import {BrowserRouter, Route} from "react-router-dom";
import Coffee from "./Coffee/Coffee";
import NewItem from "./NewItem/NewItem";
import FavoriteSecurities from "./Home/containers/FavoriteSecurities";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>

          <div className="container h-100">
              <div className="d-flex flex-column h-100">
                  <div className="row">
                      <div className="col col-12">
                          {/*<Navigation/>*/}
                      </div>
                  </div>
                  <div className="row flex-grow-1 pt-2">
                      <div className="col col-12">
                          <Route exact path="/" component={Home}></Route>
                          <Route exact path="/favorites" component={FavoriteSecurities}></Route>
                          <Route exact path="/new-coffee-item" component={NewItem}></Route>
                      </div>
                  </div>
              </div>
          </div>

      </BrowserRouter>
  );
}

export default App;
