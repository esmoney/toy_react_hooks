import React from 'react';
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Lecture from "./pages/lecture";
import Header from './commons/components/organisms/Header';

const hist = createBrowserHistory();

function App() {
  return (
    <>
      <Header emphasize="" normal="" />
      <Router history={hist}>
        <Switch>
          <Route path="/diva" component={Lecture} />
          <Redirect from="/" to="/diva/lecture" />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
