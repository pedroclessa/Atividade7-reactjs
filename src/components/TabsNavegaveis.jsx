import React, { useState } from 'react';

const TabsNavegaveis = () => {
  const [abaAtiva, setAbaAtiva] = useState('sobre');

  const conteudo = {
    sobre: {
      titulo: 'Sobre',
      conteudo: 'Esta é a página Sobre. Aqui você pode encontrar informações sobre nossa empresa.'
    },
    contato: {
      titulo: 'Contato',
      conteudo: 'Entre em contato conosco através do email: contato@exemplo.com'
    },
    servicos: {
      titulo: 'Serviços',
      conteudo: 'Conheça nossos serviços: Desenvolvimento Web, Design UI/UX, Consultoria.'
    }
  };

  return (
    <div className="tabs-navegaveis-container">
      <h2>Tabs Navegáveis</h2>
      <div className="tabs">
        {Object.keys(conteudo).map(aba => (
          <button
            key={aba}
            className={`tab ${abaAtiva === aba ? 'ativa' : ''}`}
            onClick={() => setAbaAtiva(aba)}
          >
            {conteudo[aba].titulo}
          </button>
        ))}
      </div>
      <div className="conteudo-aba">
        <h3>{conteudo[abaAtiva].titulo}</h3>
        <p>{conteudo[abaAtiva].conteudo}</p>
      </div>
    </div>
  );
};

export default TabsNavegaveis; 