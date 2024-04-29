import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Route, Routes, useNavigate } from "react-router-dom";

import App from "../../App.tsx";
import { Sport } from "../../views/sports/[sport].tsx";

export const Providers = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sports/:sport" element={<Sport />} />
        </Routes>
      </NextThemesProvider>
    </NextUIProvider>
  );
};
