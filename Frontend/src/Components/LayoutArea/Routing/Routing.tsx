import { Navigate, Route, Routes } from "react-router-dom";
import { Page404 } from "../../Screens/Page404/Page404";
import { MyProjects } from "../../Screens/MyProjects/MyProjects";
import Profile from "../../Screens/Profile/Profile";

export function Routing() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/my-projects" />} />
                <Route path="*" element={<Page404 />} />
            
                <Route path="/profile" element={<Profile />} />
                <Route path="/my-projects" element={<MyProjects />} />
            </Routes>
        </div>
    );
}
