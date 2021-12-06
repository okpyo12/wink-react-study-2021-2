import React from "react";
//import * as lib from "./components/library";
import FileUpload from "./components/FileUpload";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <FileUpload />
      </div>
    </div>
  );
};

export default App;