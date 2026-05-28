import "../App.css";
import logo from "../assets/logo.png"
import shop from "../assets/icon/store.png"
import seacrh from "../assets/icon/search.png"
import menu from "../assets/icon/menu.png"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-content"></div>
      <img src={logo} alt="Logo" className="logo-header" onClick={() => navigate('/')} />
      <div className="navbar-icons">
        <img src={shop} alt="Shop" className="shop-icon" onClick={() => navigate('/Store')} />
        <img src={seacrh} alt="Search" className="search-icon" />
        <img src={menu} alt="Menu" className="menu-icon" />
      </div>
    </header>
  );
}