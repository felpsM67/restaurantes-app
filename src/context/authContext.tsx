import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  usuario: any;
  verificarLogin: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<any>(null);

  const verificarLogin = () => {
    const token = localStorage.getItem("token");
    if (!token || token === "undefined" || token === "null") {
      window.location.href = "/login";
      return;
    }
    const dadosUsuario = atob(token.split(".")[1]);
    if (dadosUsuario) {
      setUsuario(JSON.parse(dadosUsuario));
    }
  };

  useEffect(() => {
    verificarLogin();
  }, []);
  return (
    <AuthContext.Provider value={{ usuario, verificarLogin }}>
      {children}
    </AuthContext.Provider>
  );
};