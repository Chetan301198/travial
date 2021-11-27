import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Navbar";
import Resume from "./pages/Resume";
import { BiArrowToBottom } from "react-icons/bi";
import jsPDF from "jspdf";

const App = () => {
  const [add, setAdd] = useState(false);

  const handlePdf = () => {
    setAdd(true);
    setInterval(() => setAdd(false), 5000);
    var doc = new jsPDF("portrait", "px", "a4", "false");
    doc.html(document.querySelector("#cv"), {
      callback: function (pdf) {
        pdf.save("myResume.pdf");
      },
    });
  };

  return (
    <>
      <div className={"app"}>
        <main className="main bd-container">
          <Router>
            <Switch>
              <Route exact path="/" component={Resume} />
            </Switch>
          </Router>
        </main>

        <Header />
        <button
          className={add ? "scale-cv create-pdf" : "create-pdf"}
          onClick={handlePdf}
        >
          <BiArrowToBottom className="icon" />
          Download
        </button>
      </div>
    </>
  );
};

export default App;
