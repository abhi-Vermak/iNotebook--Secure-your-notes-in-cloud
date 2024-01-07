import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import About from "./component/About";
import Home from "./component/Home";
import NoteState from "./context/note/NoteState";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </NoteState>
    </>
  );
}
export default App;
