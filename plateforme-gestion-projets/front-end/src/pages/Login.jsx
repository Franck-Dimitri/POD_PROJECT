 // src/pages/Login.js
import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⚠️ Ajoute ici la vérification des identifiants
    if (credentials.email && credentials.password.length >= 6) {
      // Simule une connexion réussie
      navigate("/acceuil");
    } else {
      alert("Identifiants incorrects.");
    }
  };

  return (

    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 overflow-hidden flex items-center justify-center">
    {/* Formes animées en fond */}
    <div className="absolute w-[700px] h-[700px] bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse -top-64 -left-64"></div>
   <div className="absolute w-[500px] h-[500px] bg-yellow-200 rounded-full opacity-30 blur-2xl animate-bounce -bottom-20 -right-40"></div>
   <div className="absolute w-[400px] h-[400px] bg-pink-300 rounded-full opacity-20 blur-xl animate-spin-slow top-10 right-1/2"></div>

   <div className="z-10 p-8 bg-white bg-opacity-60 backdrop-blur-md rounded-2xl shadow-xl">
     <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Connectez-vous</h2>
           <form className="" onSubmit={handleSubmit}>
   
           <div class="pt-3">
               <label htmlFor="nom">adresse mail</label>
             <input
               type="email"
               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
               onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
             />
           </div>
   
           <div class="pt-3">
               <label htmlFor="nom">mot de passe</label>
   
             <input
               type="password"
               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
               onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             />
           </div>
           <div class="pt-5
           ">
             <button
               type="submit"
               className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
             >
               Connexion
             </button>
           </div>
           <div class="pt-5 justify-center display flex">
           <p className="text-sm text-center mt-4">
             Vous n'avez pas de compte ?{" "} <Link to="/register" className="text-blue-500 hover:underline"> S'incrire  </Link>
           </p>
           </div>
           </form>
         </div>
       </div>
  );
}

export default Login;
