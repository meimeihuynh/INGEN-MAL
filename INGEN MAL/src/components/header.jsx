import "../App.css";
import logo from "../assets/logo.png"

export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar-content"></div>
      <img src={logo} alt="Logo" className="logo-header" />
    </header>
  );
}