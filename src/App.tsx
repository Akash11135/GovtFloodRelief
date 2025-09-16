import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DonationPage from './components/DonationPage';
import NGODashboard from './components/NGODashboard';
import ProtectedRoute from './components/ProtectedRoute';
import DonationForm from './components/DonationForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute userType="individual">
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/donate/:district" 
              element={
                <ProtectedRoute userType="individual">
                  <DonationPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ngo-dashboard" 
              element={
                <ProtectedRoute userType="ngo">
                  <NGODashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path='/donate'
              element={<DonationPage/>}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;