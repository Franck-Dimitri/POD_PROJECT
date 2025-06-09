// frontend/src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Envoyer la requête à l'API backend
    console.log("Formulaire envoyé", formData);

    // Redirection simulée
    navigate("/login");
  };

  return (
    <div className="bg-gray-white">
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Créer un compte</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="nom"
                placeholder="Nom complet"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="email"
                name="email"
                placeholder="Adresse mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
            >
                S'inscrire
            </button>
            </form>
            <p className="text-sm text-center text-gray-600 mt-4">
            Déjà un compte ?{" "}
            <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
            >
                Se connecter
            </span>
            </p>
        </div>
        </div>
    </div>
  );
};

export default Register;
