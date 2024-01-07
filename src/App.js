import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import About from "./component/About";
import Home from "./component/Home";

function App() {
  return (
    <>
   <Router>
    <Navbar/>
    <Alert/>
    <Routes exact path = "/" element ={<Home />}></Routes>
    <Routes exact path = "/about" element ={<About />}></Routes>
   </Router>
    </>
  );
}
export default App;
