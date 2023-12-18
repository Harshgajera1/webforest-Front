import React, { useEffect, useState } from "react";
import Login from "./View/Login";
import Signup from "./View/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./View/Home";

function App() {
  const [temp,setTemp] = useState(false)
  const isUserLoggedIn = !!localStorage.getItem('login');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isUserLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login setTemp={setTemp}/>} />
        <Route path="/signup" element={<Signup setTemp={setTemp}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
