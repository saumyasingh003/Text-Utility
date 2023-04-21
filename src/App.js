import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About  from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState('initialState');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setAlert('initialState')
    },2000)
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#395e93";
      showAlert(":Dark mode has been enabled", "success");
      document.title ='Textutils-Dark mode';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(":Light mode has been enabled", "success");
      document.title ='Textutils -Light mode';
    }
  };
  return (
    <>
      {/*<Navbar title="Textutils"  Abouttext="About Us"/>*/}
      {/* <Navbar/> */}
      <Router>
  {/* We want navbar and alert at every page so ham isme routes nhi lgayenge ..we can just leave it inside or outside router tag */}
      <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />  
      <Alert alert = {alert} />
    
      <div className="container my-3">
      <Routes>
        <Route path="/" element =
       { <Textform
          showAlert={showAlert}
          heading="Type the text to analyze below"
          mode={Mode}
        />}></Route>
       <Route path='/about' element ={<About/>}></Route>
      </Routes>
      </div>
             
      </Router>
    </>
  );
}

export default App;
