import './App.css';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Textos from './components/Textos';
import React from 'react';
import { ProvedorTema } from './components/TemaContexto';
import AlternarTema from './components/AlternarTema';
import ComponentePrincipal from './components/ComponentePrincipal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador/>
        <Textos/>
        <Lista/>
        <ProvedorTema>
          <div className="App">
            <AlternarTema />
            <ComponentePrincipal />
          </div>
        </ProvedorTema>
      </header>
    </div>
  );
}

export default App;