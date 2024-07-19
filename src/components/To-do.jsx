// TodoList.js
import React, { useState, useCallback } from 'react';
import '../App.css';
const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState('');

  const adicionarTarefa = useCallback(() => {
    if (tarefa) {
      setTarefas((tarefasAnteriores) => [...tarefasAnteriores, tarefa]);
      setTarefa('');
    }
  }, [tarefa]);

  return (
    <div className="component">
      <form>
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      </form>
      <ul>
        {tarefas.map((t, index) => (
          <li className="idea-item" key={index}>
            <h3>{t}</h3>
            <button>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
