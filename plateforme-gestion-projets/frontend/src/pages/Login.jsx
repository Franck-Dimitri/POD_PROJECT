// src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white border border-blue-100 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">Connexion</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Entrez votre email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Vous n'avez pas de compte ?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
