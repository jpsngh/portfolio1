
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/experience" element={<Experience></Experience>}></Route>

      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
