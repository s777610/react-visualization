import React from "react";
import Welcome from "./components/Welcome";
import HeadBar from "./components/layout/HeadBar";

function App() {
  return (
    <div className="layout">
      <HeadBar />
      <Welcome />
    </div>
  );
}

export default App;
