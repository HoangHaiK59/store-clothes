import React from 'react';
import App from '../main/App';
import {Route} from 'react-router-dom';

const SectionRoute = ({title,...props}) => (
  <App title={title}>
    <Route {...props}></Route>
  </App>
);

export default SectionRoute;