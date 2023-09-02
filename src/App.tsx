import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ExploreTopBooks } from "./layouts/HomePage/ExploreTopBooks";

function App() {
  // create a bootstrap navbar
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
    </div>
  );
}

export default App;
