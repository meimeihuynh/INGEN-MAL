import "../App.css";
import Altlogo from "../assets/logo-store.png"
import shop from "../assets/icon/store.png"
import seacrh from "../assets/icon/search.png"
import menu from "../assets/icon/menu.png"
import { useNavigate } from "react-router-dom";


export default function Headerstore() {
  const navigate = useNavigate();

  return (
    <header className="navbar-store">
      <div className="navbar-content"></div>
      <img src={Altlogo} alt="Logo" className="logo-header" onClick={() => navigate('/')} />
            <div className="storenavbar-icons">
              <img src={shop} alt="Shop" className="storeshop-icon" />
              <img src={seacrh} alt="Search" className="storesearch-icon" />
              <img src={menu} alt="Menu" className="storemenu-icon" />
            </div>
    </header>
  );
}

