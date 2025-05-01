import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Admin Page</h1>
      <p className="mb-10 text-lg">You are successfully logged in.</p>
      <button
        onClick={handleLogout}
        className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Admin;
