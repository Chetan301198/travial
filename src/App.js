import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Work from "./pages/Work";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Work" component={Work} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
