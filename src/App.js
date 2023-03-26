import "./App.css";
import React from "react";
import Search from "./components/Search/Search";
import Movies from "./components/Movies/Movies";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Movies />
    </ThemeProvider>
  );
}

export default App;
