import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header() {
    return (
        <div className="Header">
    
                <h3 className="name-title">Itzik Templeman | </h3>
       
            <div className="nav-link">
                     <NavLink to="/my-projects">My projects</NavLink>
                <NavLink to="/profile">Profile</NavLink>
        
            </div>
        </div>
    );
}

