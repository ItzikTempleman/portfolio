import { NavLink } from "react-router-dom";

import "./Page404.css";

export function Page404() {

    return (
        <div className="Page404">
            <h1>404</h1>
			<p>The page you are looking for does'nt exist</p>
            <NavLink to={"/my-projects"}>Return to home </NavLink>
        </div>
    );
}
