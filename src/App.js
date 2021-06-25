import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Navbar";
import Resume from "./pages/Resume";

const App = () => {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="app">
      <main className="main bd-container">
        <Router>
          <Switch>
            <Route exact path="/" component={Resume} />
          </Switch>
        </Router>
      </main>
      <Header />
    </div>
  );
};

export default App;
