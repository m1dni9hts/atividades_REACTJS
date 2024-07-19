// App.js
import React from 'react';
import Forms from './components/Forms';
import Relogio from './components/Time';
import Fatorial from './components/Fatorial';
import ListaTarefas from './components/To-do';
import Login, { FornecerUsuario } from './components/Login';
import GerenciamentoOrcamento from './components/Gerenciamento';
import './App.css'; 

const App = () => {
  return (
    <FornecerUsuario>
      <div className="container">
        <Forms />
        <Relogio />
        <Fatorial />
        <ListaTarefas />
        <Login />
        <GerenciamentoOrcamento />
      </div>
    </FornecerUsuario>
  );
};

export default App;
