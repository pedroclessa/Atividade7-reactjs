import React, { useState, useEffect } from 'react';

const AlteradorCor = () => {
  const [cor, setCor] = useState('#ffffff');

  const gerarCorAleatoria = () => {
    const letras = '0123456789ABCDEF';
    let novaCor = '#';
    for (let i = 0; i < 6; i++) {
      novaCor += letras[Math.floor(Math.random() * 16)];
    }
    return novaCor;
  };

  const mudarCor = () => {
    setCor(gerarCorAleatoria());
  };

  useEffect(() => {
    document.body.style.backgroundColor = cor;
    return () => {
      document.body.style.backgroundColor = '#ffffff';
    };
  }, [cor]);

  return (
    <div className="alterador-cor-container">
      <h2>Alterador de Cor de Fundo</h2>
      <p>Cor atual: {cor}</p>
      <button onClick={mudarCor}>Mudar Cor</button>
    </div>
  );
};

export default AlteradorCor; 