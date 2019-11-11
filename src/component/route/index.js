import React from 'react';
import App from '../main/App';
import {Route} from 'react-router-dom';

const SectionRoute = ({title,isActiveNav,...props}) => (
  <App title={title} isActiveNav={isActiveNav}>
    <Route {...props}></Route>
  </App>
);

export default SectionRoute;