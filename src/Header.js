import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
  // Utilisation du contexte utilisateur pour récupérer les informations sur l'utilisateur
  const { setUserInfo, userInfo } = useContext(UserContext);

  // Effet pour récupérer les informations de profil de l'utilisateur lors du chargement du composant
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo); // Mise à jour des informations utilisateur dans le contexte
      });
    });
  }, []);

  // Fonction de déconnexion de l'utilisateur
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null); // Réinitialisation des informations utilisateur dans le contexte
  }

  // Récupération du nom d'utilisateur actuel, s'il est défini
  const username = userInfo?.username;

  return (
    <header className="header"> {/* En-tête de la page */}
      <div className="container"> {/* Conteneur du contenu de l'en-tête */}
        <Link to="/" className="logo">Cars Lover</Link> {/* Logo avec lien vers la page d'accueil */}
        <nav className="nav"> {/* Navigation de l'en-tête */}
          {/* Condition pour afficher les liens de navigation en fonction de l'état de connexion de l'utilisateur */}
          {username ? ( 
            <>
              <Link to="/create" className="nav-link">Create New Post</Link> {/* Lien pour créer un nouvel article */}
              <button onClick={logout} className="nav-link-btn">Logout</button> {/* Bouton de déconnexion */}
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link> {/* Lien de connexion */}
              <Link to="/register" className="nav-link">Register</Link> {/* Lien d'inscription */}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
