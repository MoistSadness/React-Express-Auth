import { createContext, useState } from "react";

const AuthContext = createContext({})

// children represents the components nested inside the AuthProvider
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext