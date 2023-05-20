import './styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Auction } from "./pages/auction";
import { Bazaar } from "./pages/bazaar";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Logout } from "./pages/logout";
import { Navbar } from "./components/navbar";

function App() {
  return (<Router>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/auction" element = {<Auction />} />
            <Route path = "/bazaar" element = {<Bazaar />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/register" element = {<Register />} />
            <Route path = "/logout" element = {<Logout />} />
          </Routes>
        </div>
    </Router>);
}

export default App;
