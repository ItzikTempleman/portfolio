import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../Screens/Home/Home";
import Profile from "../../Screens/Profile/Profile";

export function Routing() {
  return (
    <Routes>
      <Route index element={<Navigate to="home" replace />} />
      <Route path="home" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="home" replace />} />
    </Routes>
  );
}