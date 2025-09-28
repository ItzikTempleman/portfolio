import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { MainLayout } from "./Components/LayoutArea/MainLayout/MainLayout";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./Theme/Theme";

if (!location.hash && location.pathname !== "/") {
  location.replace("/#" + location.pathname + location.search);
}

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <ThemeProvider theme={muiTheme}>
      <MainLayout />
    </ThemeProvider>
  </HashRouter>
);