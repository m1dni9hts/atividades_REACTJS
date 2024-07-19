// Fatorial.js
import React, { useState, useMemo } from 'react';
import '../App.css'; 

const fatorial = (n) => {
  if (n <= 0) return 1;
  return n * fatorial(n - 1);
};

const Fatorial = () => {
  const [numero, setNumero] = useState(0);

  const resultado = useMemo(() => fatorial(numero), [numero]);

  return (
    <div className="component">
      <form>
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(Number(e.target.value))}
        />
      </form>
      <p>Fatorial de {numero} é {resultado}</p>
    </div>
  );
};

export default Fatorial;
