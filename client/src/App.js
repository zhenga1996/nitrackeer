import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Player } from "./pages/player";
import { Auction } from "./pages/auction";
import { Bazaar } from "./pages/bazaar";
import { Product } from './pages/product';
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Logout } from "./pages/logout";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/player" element = {<Player />} />
        <Route path = "/auction" element = {<Auction />} />
        <Route path = "/bazaar" element = {<Bazaar />} />
        <Route path = "/bazaar/:productId" element = {<Product />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/logout" element = {<Logout />} />
      </Routes>
    </Router>);
}

export default App;
