import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./Components/LayoutArea/MainLayout/MainLayout";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./Theme/Theme";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ThemeProvider theme={muiTheme}>
      <MainLayout />
    </ThemeProvider>
  </BrowserRouter>
);
