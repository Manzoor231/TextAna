import React, { useState } from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = 'white'
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
    }
  };

  return (
  <Router>
  <div className="App">
   
  <Navbar mode={mode} toggleMode={toggleMode} />
  


  <div className="container">
    

      <Routes>
        <Route exact path="/" element={<TextForm />} />
        <Route path="about" element={<About mode={mode}  />}>
        </Route>
      </Routes>

  </div>


  </div>
   </Router>
  );
}

export default App;