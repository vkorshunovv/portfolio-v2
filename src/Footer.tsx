import { Link } from "react-router-dom";
import "./App.css";

const Footer = () => {
  return (
    <footer className="grid footer">
      <div className="fun footer">
        <div className="legal footer">
          <div className="footer">© 2024 Viktor Korshunov</div>
          <div className="dot footer">.</div>
          <div className="footer">España</div>
        </div>
      </div>
      <ul className="list elsewheres footer">
        <li className="h6 footer">Elsewhere</li>
        <li className="footer">
          <Link to="https://github.com/vkorshunovv" className="footer">
            GitHub
          </Link>
        </li>
        <li className="footer">
          <Link to="https://www.linkedin.com/in/viktor-korshunow">
            LinkedIn
          </Link>
        </li>
      </ul>
      <ul className="list contacts footer">
        <li className="h6 footer">Contact</li>
        <li className="footer">
          <Link to="mailto: korshunow94@gmail.com" className="footer">
            Email
          </Link>
        </li>
        <li className="footer">
          <Link to="https://t.me/korshunow">Telegram</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
