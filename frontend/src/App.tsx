import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import Navbar from "./components/NavBar";

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
          <Route path="/dashboard" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />
        </Routes>
      </Router>
  );
}

export default App;