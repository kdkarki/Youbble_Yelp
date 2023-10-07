import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import HomePage from "./components/HomePage";
import Dashboard from "./components/dashboards/Dashboard";
import Navbar from "./components/NavBar";
import { AuthProvider } from "./contexts/AuthContext";
import AppContainer from "./components/AppContainer";

const App = () => {
  
  return (
    <AuthProvider>
      <AppContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
            <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
          </Routes>
        </Router>
      </AppContainer>
    </AuthProvider>
  );
}

export default App;
