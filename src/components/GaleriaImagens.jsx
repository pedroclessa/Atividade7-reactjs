import React, { useState } from 'react';

const GaleriaImagens = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const imagens = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5'
  ];

  const abrirModal = (imagem) => {
    setImagemSelecionada(imagem);
  };

  const fecharModal = () => {
    setImagemSelecionada(null);
  };

  const navegarImagem = (direcao) => {
    const indexAtual = imagens.indexOf(imagemSelecionada);
    let novoIndex;
    
    if (direcao === 'anterior') {
      novoIndex = indexAtual === 0 ? imagens.length - 1 : indexAtual - 1;
    } else {
      novoIndex = indexAtual === imagens.length - 1 ? 0 : indexAtual + 1;
    }
    
    setImagemSelecionada(imagens[novoIndex]);
  };

  return (
    <div className="galeria-imagens-container">
      <h2>Galeria de Imagens</h2>
      <div className="grid-imagens">
        {imagens.map((imagem, index) => (
          <div key={index} className="imagem-item">
            <img
              src={imagem}
              alt={`Imagem ${index + 1}`}
              onClick={() => abrirModal(imagem)}
            />
          </div>
        ))}
      </div>

      {imagemSelecionada && (
        <div className="modal">
          <div className="modal-conteudo">
            <button className="fechar" onClick={fecharModal}>×</button>
            <button className="navegacao anterior" onClick={() => navegarImagem('anterior')}>
              ‹
            </button>
            <img src={imagemSelecionada} alt="Imagem selecionada" />
            <button className="navegacao proxima" onClick={() => navegarImagem('proxima')}>
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaImagens; 