import React from "react";
import ReactDOM from "react-dom";
import {Router,Switch} from 'react-router-dom';
import Home from './component/home';
import Sale from './component/store/sale';
import Hot from './component/store/hot';
import SectionRoute from './component/route';
import {createBrowserHistory} from 'history';

import "./styles.css";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <SectionRoute exact path= "/" title="" isActiveNav={false} component={Home}/>
      <SectionRoute path= "/sale" title="" isActiveNav={true} component={Sale}/>
      <SectionRoute path= "/hot" title="" isActiveNav={true} component={Hot}/>
    </Switch>
  </Router>
  , rootElement);
