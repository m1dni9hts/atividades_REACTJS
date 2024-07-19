// Time.js
import React, { useState, useEffect } from 'react';
import '../App.css';

const Relogio = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [mensagemVisivel, setMensagemVisivel] = useState(true);

  useEffect(() => {
    const intervaloId = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    const timeoutId = setTimeout(() => {
      setMensagemVisivel(!mensagemVisivel);
    }, 3000);

    return () => {
      clearInterval(intervaloId);
      clearTimeout(timeoutId);
    };
  }, [mensagemVisivel]);

  return (
    <div className="component">
      <header>
        <h2>Hora Atual: {hora}</h2>
      </header>
      {mensagemVisivel && <p>Esta mensagem aparece e desaparece a cada 3 segundos</p>}
    </div>
  );
};

export default Relogio;
