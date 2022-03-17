import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VendingMachine from './VendingMachine';


function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <VendingMachine />
      </Route>
    </Switch>
   
   </BrowserRouter>
  );
}

export default App;
