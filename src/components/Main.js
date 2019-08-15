import React from "react";
import { Switch, Route,withRouter } from "react-router-dom";
import Cart from "./Cart";
import ProdList from "./ProdList";
import Cart1 from "./Cart1";


const Main = () => {
  return (
    <div >
        <Switch>
        <Route
          exact
          path="/"
          component={ Cart }
        />
        <Route
          exact
          path="/prodlist"
          component={ ProdList }
        />
         <Route
          exact
          path="/cart1/:id1/:id2/:id3"
          component={Cart1}
        />
        </Switch>
       
       
        
      
    </div>
  );
};



export default Main ;