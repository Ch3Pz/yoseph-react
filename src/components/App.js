import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Header';
import Homepage from './Homepage';
import Portfolio from "./Portfolio";

const App = () => {
  return(
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={Homepage} />
        <Route path="/portfolio/:slug" component={Portfolio} />
      </main>
    </Router>
  );
}

export default App;