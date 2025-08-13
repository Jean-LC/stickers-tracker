import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import '@mantine/charts/styles.css'
import { customTheme } from "./assets/customTheme.ts";
import MainPage from "./components/MainPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={customTheme}>
      <MainPage />
    </MantineProvider>
  </StrictMode>
);
