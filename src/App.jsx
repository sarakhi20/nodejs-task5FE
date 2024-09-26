import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ActivateAccount from "./components/Auth/ActivateAccount";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ResetPassword from "./components/Auth/ResetPassword"; // Import the ResetPassword component
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Layout/Navbar";
import './App.css';



const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activate/:token" element={<ActivateAccount />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/reset/:token" element={<ResetPassword />} /> {/* Add route for ResetPassword */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;