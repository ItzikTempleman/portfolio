import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../../Screens/Home/Home";
import Profile from "../../Screens/Profile/Profile";

export function Routing() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="*" element={<Navigate to="/Home" />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </div>
    );
}
