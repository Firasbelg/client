import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    // Fonction de connexion
    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo); // Mettre à jour les informations de l'utilisateur
                setRedirect(true); // Rediriger vers la page d'accueil
            });
        } else {
            alert('Wrong credentials'); // Afficher une alerte si les identifiants sont incorrects
        }
    }

    // Redirection après la connexion
    if (redirect) {
        return <Navigate to={'/'} />; // Rediriger vers la page d'accueil
    }

    // Formulaire de connexion
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={login}>
                <h1>Login</h1>
                <div className="input-group">
                    <input type="text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)} />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}
