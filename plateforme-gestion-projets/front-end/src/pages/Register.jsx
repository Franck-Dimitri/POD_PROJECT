import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
  const [formData, setFormData] = useState({ nom: "", prenom: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⚠️ Ajoute ici ta propre logique de validation si nécessaire
    if (formData.nom && formData.prenom && formData.email && formData.password.length >= 6) {
      // Simule une inscription réussie
      navigate("/login");
    } else {
      alert("Veuillez remplir tous les champs correctement.");
    }
    }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 overflow-hidden flex items-center justify-center">
       {/* Formes animées en fond */}
       <div className="absolute w-[700px] h-[700px] bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse -top-64 -left-64"></div>
      <div className="absolute w-[500px] h-[500px] bg-yellow-200 rounded-full opacity-30 blur-2xl animate-bounce -bottom-20 -right-40"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-300 rounded-full opacity-20 blur-xl animate-spin-slow top-10 right-1/2"></div>

      <div className="z-10 p-8 bg-white bg-opacity-60 backdrop-blur-md rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Créer votre compte</h2>
        <form className="" onSubmit={handleSubmit} >
        <div class="p-3">
        <label htmlFor="nom"> nom </label>
          <input
            type="text"
            name="nom"      
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          />
        </div>
        <div class="p-3">
        <label htmlFor="nom"> prenom </label>
            <input
            type="text"
            name="prenom"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
          />
        </div>

        <div class="p-3">
        <label htmlFor="nom">adresse mail</label>
          <input
            type="email"
            name='email'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div class="p-3">
        <label htmlFor="nom">mot de passe</label>
          <input
            type="password"
            name='password'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <div class="p-5
        ">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            S'incrire {" "} <Link to="/login" className="text-blue-500 hover:underline"> </Link>
          </button>
        </div>
        <div class="p-1 justify-center display flex">
        <p className="text-sm text-center mt-4">
          Vous avez déjà un compte ?{" "} <Link to="/login" className="text-blue-500 hover:underline"> Connexion  </Link>
        </p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
