import React, { useState } from 'react';

const FiltroLista = () => {
  const [filtro, setFiltro] = useState('');
  const nomes = [
    'Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo',
    'Fernanda', 'Gabriel', 'Helena', 'Igor', 'Julia'
  ];

  const nomesFiltrados = nomes.filter(nome =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="filtro-lista-container">
      <h2>Filtro de Lista</h2>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Digite para filtrar..."
      />
      <ul>
        {nomesFiltrados.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiltroLista; 