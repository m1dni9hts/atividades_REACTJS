// Login.js
import React, { createContext, useState, useContext } from 'react';
import '../App.css'; // Importe o CSS

const ContextoUsuario = createContext();

export const FornecerUsuario = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const fazerLogin = (nomeUsuario) => {
    setUsuario({ nomeUsuario });
  };

  return (
    <ContextoUsuario.Provider value={{ usuario, fazerLogin }}>
      {children}
    </ContextoUsuario.Provider>
  );
};

export const UsarUsuario = () => useContext(ContextoUsuario);

const Login = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const { fazerLogin } = UsarUsuario();

  const realizarLogin = () => {
    fazerLogin(nomeUsuario);
    setNomeUsuario('');
  };

  return (
    <div className="component">
      <form>
        <input
          type="text"
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
        />
        <button onClick={realizarLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
