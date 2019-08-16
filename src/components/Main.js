import React from "react";
import { Switch, Route,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Cart from "./Cart";
import { removeError } from "../store/actions/errors";


const Main = (props) => {
  const {errors, removeError,items}= props;
  return (
    <div >
        <Switch>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Cart
                removeError={removeError}
                errors={errors}
                {...props}
              />
            );
          }}
        />
        </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    items:state.items,
    errors: state.errors
  };
}

export default withRouter(
  connect(mapStateToProps, { removeError })(Main)
);
