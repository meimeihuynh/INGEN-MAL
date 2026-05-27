import "../App.css";
import Altlogo from "../assets/logo-store.png"

export default function Headerstore() {
  return (
    <header className="navbar-store">
      <div className="navbar-content"></div>
      <img src={Altlogo} alt="Logo" className="logo-header" />
    </header>
  );
}

