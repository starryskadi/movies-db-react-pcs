import "./App.css";
import React, { useEffect } from "react";
import Search from "./components/Search/Search";
import Movies from "./components/Movies/Movies";
import Toggle from "./components/Toggle/Toggle";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useAuthContext from "./hooks/useAuthContext";
import AuthContext from "./context/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieCreate from "./components/MovieCreate/MovieCreate";
import Error from "./components/Error/Error";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import MovieDetails from "./components/MovieDetails/MovieDetails";

// category filter, pagination.

const theme = createTheme({});

function App() {
  const { user, onLogin, onLogout } = useAuthContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Toggle /> */}
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            user,
            onLogin: onLogin,
            onLogout: onLogout,
          }}
        >
          {/* <Navbar></Navbar> */}

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Movies />}></Route>
              <Route path="/:page" element={<Movies />}></Route>
              <Route path="/create" element={<MovieCreate />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/movie/:id" element={<MovieDetails />}></Route>
              <Route path="/error" element={<Error />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Route>
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
      {/* <Movies /> */}
    </ThemeProvider>
  );
}

export default App;
