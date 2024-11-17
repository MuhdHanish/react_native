import React, { createContext, useContext, useState } from 'react'

type AuthState = {
    username: string | null;
};

type AuthContextType = {
    authState: AuthState,
    setAuthState: (authState: AuthState) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [authState, setAuthState] = useState<AuthState>({ username: "MuhdHanish" });
    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
            {children}
        </AuthContext.Provider>
    );
};
