import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Soda from './Soda';


function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <VendingMachine />
      </Route>
      <Route exact path="/soda">
      <Soda />
      </Route>
    </Switch>
   
   </BrowserRouter>
  );
}

export default App;
