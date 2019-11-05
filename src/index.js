import React from "react";
import ReactDOM from "react-dom";
import {Route,Switch} from 'react-router-dom';
import Home from './component/home';
import SectionRoute from './component/route';

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Route>
    <Switch>
      <SectionRoute exact path= "/" title="Home" component={Home}/>
    </Switch>
  </Route>
  , rootElement);
