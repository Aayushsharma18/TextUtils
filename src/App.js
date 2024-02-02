import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {


  return (
    <div className="App">
      <Navbar title="TextUtils App" home="Home" about="About" />
      <div className="container">
        <TextForm header="TextForm" label="Write your Text to manipulate " placeholder="Write text here:" />

      </div>
    </div>
  );
}

export default App;
