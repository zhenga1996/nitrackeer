import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auction } from "./pages/auction";
import { Bazaar } from "./pages/bazaar";
import { Auth } from "./pages/auth";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className = "App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/auction" element = {<Auction />} />
          <Route path = "/bazaar" element = {<Bazaar />} />
          <Route path = "/auth" element = {<Auth />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
