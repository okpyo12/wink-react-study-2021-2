import React from "react";
//import * as lib from "./components/library";
import DragDrop from "./components/DragDrop";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <DragDrop />
      </div>
    </div>
  );
};

export default App;