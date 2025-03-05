import React, { useState, useEffect } from 'react';

const Temporizador = () => {
  const [tempo, setTempo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [tempoInicial, setTempoInicial] = useState(0);

  useEffect(() => {
    let intervalo;
    if (!pausado && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo(tempo => tempo - 1);
      }, 1000);
    } else if (tempo === 0) {
      alert('Tempo acabou!');
    }
    return () => clearInterval(intervalo);
  }, [pausado, tempo]);

  const iniciarTemporizador = (segundos) => {
    setTempo(segundos);
    setTempoInicial(segundos);
    setPausado(false);
  };

  const pausarTemporizador = () => {
    setPausado(!pausado);
  };

  const reiniciarTemporizador = () => {
    setTempo(tempoInicial);
    setPausado(false);
  };

  return (
    <div className="temporizador-container">
      <h2>Temporizador</h2>
      <p>Tempo restante: {tempo} segundos</p>
      <div className="controles">
        <button onClick={() => iniciarTemporizador(60)}>Iniciar 60s</button>
        <button onClick={() => iniciarTemporizador(30)}>Iniciar 30s</button>
        <button onClick={pausarTemporizador}>
          {pausado ? 'Continuar' : 'Pausar'}
        </button>
        <button onClick={reiniciarTemporizador}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Temporizador; 