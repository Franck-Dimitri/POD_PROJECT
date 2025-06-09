import { useEffect, useState } from "react";

export default function Accueil() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simule des projets (tu pourras brancher une API plus tard)
    const dummyProjects = [
      {
        id: 1,
        name: "Projet Alpha",
        progress: 66,
        lastActivity: "il y a 2h",
      },
      {
        id: 2,
        name: "Projet Beta",
        progress: 40,
        lastActivity: "il y a 1 jour",
      },
      {
        id: 3,
        name: "Projet Smart",
        progress: 90,
        lastActivity: "il y a 5 jour",
      },
    ];
    setProjects(dummyProjects);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md h-screen p-5 space-y-4">
        <h1 className="text-xl font-bold text-indigo-600">CollabPro</h1>
        <nav className="mt-6 space-y-3">
          <a href="#" className="block text-indigo-600 font-semibold">Tableau de bord</a>
          <a href="#" className="block text-gray-600 hover:text-indigo-600">Projets</a>
          <a href="#" className="block text-gray-600 hover:text-indigo-600">Membres</a>
          <a href="#" className="block text-gray-600 hover:text-indigo-600">Notifications</a>
          <a href="#" className="block text-gray-600 hover:text-indigo-600">Paramètres</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 space-y-10 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800">Tableau de bord</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Déconnexion</button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-sm text-gray-500">Projets actifs</h3>
            <p className="text-3xl font-bold text-indigo-600">5</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-sm text-gray-500">Tâches terminées</h3>
            <p className="text-3xl font-bold text-green-500">27</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-sm text-gray-500">Membres</h3>
            <p className="text-3xl font-bold text-red-500">12</p>
          </div>
        </div>

        {/* Projets */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">Mes Projets</h2>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              + Nouveau Projet
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white p-5 rounded shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-indigo-700">{project.name}</h3>
                <p className="text-sm text-gray-500">Dernière activité : {project.lastActivity}</p>
                <div className="mt-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <p className="text-sm mt-2 text-gray-600">Progression : {project.progress}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tâches récentes */}
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4">Tâches Récentes</h2>
          <ul className="space-y-3">
            <li className="bg-white p-4 rounded shadow">
              ✅ Julien a terminé la tâche "Design du tableau de bord"
              <span className="text-sm text-gray-400 float-right">il y a 1h</span>
            </li>
            <li className="bg-white p-4 rounded shadow">
              ✏️ Sarah a modifié le README du projet "Beta"
              <span className="text-sm text-gray-400 float-right">il y a 3h</span>
            </li>
          </ul>
        </div>

        {/* Inviter un membre */}
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4">Inviter un Collaborateur</h2>
          <form className="flex gap-2">
            <input type="email" placeholder="Adresse e-mail" className="flex-1 p-2 border rounded" />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Inviter</button>
          </form>
        </div>
      </main>
    </div>
  );
}
