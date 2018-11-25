import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Product from "../src/components/product";
import NotFound from "../src/components/notFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "../src/styles/style.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <main className="container">
          <Switch>
            <Route path="/product" render={props => <Product />} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/product" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
