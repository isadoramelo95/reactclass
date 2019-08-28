import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import { DetalhesPage }from "./Pages/Detalhespage";
import { HomePage } from "./Pages/Home";
import { NotFound } from "./Pages/notfound";

function App() {
  return(
  <BrowserRouter>
  <Switch>
  <Route component={HomePage} exact path= "/"></Route>
  <Route component={DetalhesPage} path= "/detalhes"></Route>
  <Route component={NotFound}></Route>
  </Switch>
   </BrowserRouter>
  );
}
export default App;
