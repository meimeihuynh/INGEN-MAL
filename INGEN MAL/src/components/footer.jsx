import "../App.css";
import logo from "../assets/logohvit.png"
import medielogo from "../assets/medielogo.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">


        <div className="footer-logo">
        <img src={logo} className="footer-logoimg" alt="Logo" />
        <img src={medielogo} className="footer-medielogoimg" alt="Medielogo" />
        </div>
          

        <div className="footer-contact">
          Kontakt oss
        </div>

        <div className="footer-language">
          Norsk
        </div>

      </div>
    </footer>
  );
}