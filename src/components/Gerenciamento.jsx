// Gerenciamento.js
import React, { useState } from 'react';
import '../App.css'; 

const GerenciamentoOrcamento = () => {
  const [despesas, setDespesas] = useState([]);
  const [despesa, setDespesa] = useState('');
  const [valor, setValor] = useState(0);

  const adicionarDespesa = () => {
    if (despesa && valor) {
      setDespesas((despesasAnteriores) => [...despesasAnteriores, { despesa, valor }]);
      setDespesa('');
      setValor(0);
    }
  };

  const totalDespesas = despesas.reduce((acumulado, atual) => acumulado + atual.valor, 0);

  return (
    <div className="component">
      <h2>Gerenciamento de Orçamento</h2>
      <form>
        <input
          type="text"
          value={despesa}
          onChange={(e) => setDespesa(e.target.value)}
          placeholder="Despesa"
        />
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          placeholder="Valor"
        />
        <button onClick={adicionarDespesa}>Adicionar Despesa</button>
      </form>
      <ul>
        {despesas.map((d, index) => (
          <li className="idea-item" key={index}>
            <h3>{d.despesa}: R${d.valor}</h3>
          </li>
        ))}
      </ul>
      <h3>Total de Despesas: R${totalDespesas}</h3>
    </div>
  );
};

export default GerenciamentoOrcamento;
