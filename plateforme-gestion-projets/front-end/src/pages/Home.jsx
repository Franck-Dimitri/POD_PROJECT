import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center overflow-hidden">
      
      {/* Formes animées en fond */}
      <div className="absolute w-[700px] h-[700px] bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse -top-64 -left-64"></div>
      <div className="absolute w-[500px] h-[500px] bg-yellow-200 rounded-full opacity-30 blur-2xl animate-bounce -bottom-20 -right-40"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-300 rounded-full opacity-20 blur-xl animate-spin-slow top-10 right-1/2"></div>

      {/* Contenu principal */}
      <div className="z-10 text-center p-8 bg-white bg-opacity-60 backdrop-blur-md rounded-2xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Bienvenue sur <span className="text-indigo-600">CollabPro</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Gérez vos projets en équipe facilement et efficacement, où que vous soyez.
        </p>

        <div className="flex justify-center gap-6">
          <Link to="/register">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300">
              S'inscrire
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-white border border-indigo-600 hover:bg-indigo-50 text-indigo-700 font-semibold px-6 py-3 rounded-xl transition duration-300">
              Se connecter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
