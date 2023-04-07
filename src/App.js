import "./App.css";
import React, { useEffect } from "react";
import Search from "./components/Search/Search";
import Movies from "./components/Movies/Movies";
import Toggle from "./components/Toggle/Toggle";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toggle />
      {/* <Movies /> */}
    </ThemeProvider>
  );
}

export default App;
