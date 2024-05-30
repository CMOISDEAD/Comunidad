import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Route, Routes, useNavigate } from "react-router-dom";

import App from "../../App.tsx";
import { Sport } from "../../views/sports/[sport].tsx";
import { useEffect } from "react";
import { useAppStore } from "../../store/useAppStore.ts";

export const Providers = () => {
  const navigate = useNavigate();
  const { player } = useAppStore((state) => state);

  useEffect(() => {
    const handleMute = (e: KeyboardEvent) => {
      if (e.key === "m") {
        player.muted = !player.muted;
      }
    };

    window.addEventListener("keydown", handleMute);

    return () => {
      window.removeEventListener("keydown", handleMute);
    };
  });

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
