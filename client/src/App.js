import './styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auction } from "./pages/auction";
import { Bazaar } from "./pages/bazaar";
import { Auth } from "./pages/auth";
import { Logout } from "./pages/logout";
import { Navbar } from "./components/navbar";

function App() {
  return (<Router>
      <Navbar />
        <Routes> 
          <div className="container">
            <Route path = "/" element = {<Home />} />
            <Route path = "/auction" element = {<Auction />} />
            <Route path = "/bazaar" element = {<Bazaar />} />
            <Route path = "/auth" element = {<Auth />} /> 
            <Route path = "/logout" element = {<Logout />} /> 
          </div>
        </Routes>
    </Router>);
}

export default App;
