import "./App.css";
import React, { useEffect } from "react";
import Search from "./components/Search/Search";
import Movies from "./components/Movies/Movies";
import Toggle from "./components/Toggle/Toggle";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useAuthContext from "./hooks/useAuthContext";
import AuthContext from "./context/authContext";

const theme = createTheme({});

function App() {
  const { user, onLogin, onLogout } = useAuthContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Toggle /> */}
      <AuthContext.Provider
        value={{
          user,
          onLogin: onLogin,
          onLogout: onLogout,
        }}
      >
        <Movies />
      </AuthContext.Provider>
      {/* <Movies /> */}
    </ThemeProvider>
  );
}

export default App;
