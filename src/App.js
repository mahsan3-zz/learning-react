import React from 'react';
import './App.scss';
import Navigation from "./Navigation/Navigation";
import Home from "./containers/home/Home";
import {BrowserRouter, Route} from "react-router-dom";
import Coffee from "./Coffee/Coffee";
import {Provider} from "react-redux";
import { createStore } from "redux";
import appReducer from "./store/app.reducer";
import NewItem from "./NewItem/NewItem";

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
      <Provider store={store}>

          <BrowserRouter basename={process.env.PUBLIC_URL}>

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
                              <Route exact path="/new-coffee-item" component={NewItem}></Route>
                          </div>
                      </div>
                  </div>
              </div>

          </BrowserRouter>

      </Provider>
  );
}

export default App;
