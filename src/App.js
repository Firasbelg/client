import logo from './logo.svg'; // Importation de l'image du logo
import './App.css'; // Importation du fichier de styles CSS
import Post from './Post'; // Importation du composant Post
import Header from './Header'; // Importation du composant Header
import {Route, Routes} from "react-router-dom"; // Importation des composants de routage de React Router
import Layout from './Layout'; // Importation du composant Layout
import IndexPage from './pages/IndexPage'; // Importation de la page d'accueil
import LoginPage from './pages/LoginPage'; // Importation de la page de connexion
import RegisterPage from './pages/RegisterPage'; // Importation de la page d'inscription
import { UserContextProvider } from './UserContext'; // Importation du contexte utilisateur
import CreatePost from './pages/CreatePost'; // Importation de la page de création de publication
import PostPage from './pages/PostPage'; // Importation de la page de détails de publication
import EditPost from './pages/EditPost'; // Importation de la page d'édition de publication

function App() {
  return (
    <UserContextProvider> {/* Fournit le contexte utilisateur à l'ensemble de l'application */}
      <Routes> {/* Définit les routes de l'application */}
        <Route path="/" element={<Layout/>}> {/* Route principale */}
          <Route index element={<IndexPage/>}/> {/* Page d'accueil */}
          <Route path="/login" element={<LoginPage/>}/> {/* Page de connexion */}
          <Route path="/register" element={<RegisterPage/>}/> {/* Page d'inscription */}
          <Route path="/create" element={<CreatePost/>}/> {/* Page de création de publication */}
          <Route path="/post/:id" element={<PostPage/>}/> {/* Page de détails de publication */}
          <Route path="/edit/:id" element={<EditPost/>}/> {/* Page d'édition de publication */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
