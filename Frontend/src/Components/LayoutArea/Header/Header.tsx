import { NavLink } from "react-router-dom";
import "./Header.css";
import { asset } from "../../../utils/asset"; 

export function Header() {
  return (
    <div className="Header">
      <h2 className="name-title">Itzik Templeman</h2>
      <div className="nav-link">
        <NavLink to="home">Home</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </div>
      <div className="refs">
        <a href="https://github.com/ItzikTempleman">
          <img className="git" src={asset("assets/images/github.png")} />
        </a>
        <a href="https://www.linkedin.com/in/itzik-templeman-730540138/">
          <img className="lin" src={asset("assets/images/linkedin.png")} />
        </a>
      </div>
    </div>
  );
}