import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./Context/Notes/NoteState";
import {useState} from "react";


function App() {
  const [mode, setMode] = useState({
    color : "#000",
    backgroundColor : "#fff"
  });
  const [type,setType] = useState("dark");

  const toggle = () => {
    console.log("Toggle Color Mode")
    if (mode.color === "#000"){
      setMode({
        color : "#fff",
        backgroundColor : "#000"
      })
      setType("light")
      document.body.style.color = "#fff";
      document.body.style.backgroundColor = "#000";
    }
    else{
      setMode({
        color : "#000",
        backgroundColor : "#fff"
      })
      setType("dark");
      document.body.style.color = "#000";
      document.body.style.backgroundColor = "#fff";
    }
  }
  return (
    <>
    <NoteState>
      <Router>
        <Navbar toggleType={type} toggle={toggle}/>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home toggleMode={mode}  toggleType={type}/>}/>
          <Route exact path="/about" element={<About toggleType={type}/>} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
