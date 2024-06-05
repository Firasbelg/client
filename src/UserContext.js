import { createContext, useState } from "react";

// Crée un contexte utilisateur
export const UserContext = createContext({});

// Fournisseur de contexte utilisateur
export function UserContextProvider({ children }) {
    // Initialise l'état userInfo avec une valeur par défaut vide
    const [userInfo, setUserInfo] = useState({});

    // Rend le contexte utilisateur disponible pour les composants enfants
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}
