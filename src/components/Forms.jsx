// Forms.js
import React, { useRef } from 'react';
import '../App.css'; // Importe o CSS

const Forms = () => {
  const inputRef = useRef(null);

  const limparCampo = () => {
    inputRef.current.value = '';
  };

  return (
    <div className="component">
      <form>
        <input type="text" ref={inputRef} />
        <button onClick={limparCampo}>Limpar</button>
      </form>
    </div>
  );
};

export default Forms;
