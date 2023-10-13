import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import HomePage from "./components/HomePage";
import Dashboard from "./components/dashboards/Dashboard";
import Navbar from "./components/NavBar";
import { AuthProvider } from "./contexts/AuthContext";
import { DashboardProvider } from "./contexts/DashboardContext";
import AppContainer from "./components/AppContainer";

const App = () => {
  
  return (
    <AuthProvider>
      <DashboardProvider>
        <SnackbarProvider maxSnack={3}>
          <AppContainer>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
                <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
              </Routes>
            </Router>
          </AppContainer>
        </SnackbarProvider>
      </DashboardProvider>
    </AuthProvider>
  );
}

export default App;
