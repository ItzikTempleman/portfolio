import { Navigate, Route, Routes } from "react-router-dom";

import { MyProjects } from "../../Screens/MyProjects/MyProjects";
import Profile from "../../Screens/Profile/Profile";

export function Routing() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/my-projects" />} />
                <Route path="*" element={<Navigate to="/my-projects" />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/my-projects" element={<MyProjects />} />
            </Routes>
        </div>
    );
}
