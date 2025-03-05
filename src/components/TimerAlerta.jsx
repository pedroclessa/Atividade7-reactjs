import React, { useState, useEffect } from 'react';

const TimerAlerta = () => {
  const [tempo, setTempo] = useState(0);
  const [tempoInicial, setTempoInicial] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [inputTempo, setInputTempo] = useState('');

  useEffect(() => {
    let intervalo;
    if (!pausado && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo(tempo => {
          if (tempo <= 1) {
            clearInterval(intervalo);
            alert('Tempo acabou!');
            return 0;
          }
          return tempo - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [pausado, tempo]);

  const iniciarTimer = () => {
    const segundos = parseInt(inputTempo);
    if (segundos > 0) {
      setTempo(segundos);
      setTempoInicial(segundos);
      setPausado(false);
    }
  };

  const pausarTimer = () => {
    setPausado(!pausado);
  };

  const reiniciarTimer = () => {
    setTempo(tempoInicial);
    setPausado(false);
  };

  return (
    <div className="timer-alerta-container">
      <h2>Timer com Alerta</h2>
      <div className="controles">
        <input
          type="number"
          value={inputTempo}
          onChange={(e) => setInputTempo(e.target.value)}
          placeholder="Digite o tempo em segundos"
          min="1"
        />
        <button onClick={iniciarTimer} disabled={tempo > 0}>
          Iniciar
        </button>
        <button onClick={pausarTimer} disabled={tempo === 0}>
          {pausado ? 'Continuar' : 'Pausar'}
        </button>
        <button onClick={reiniciarTimer} disabled={tempo === 0}>
          Reiniciar
        </button>
      </div>
      <p className="tempo-display">Tempo restante: {tempo} segundos</p>
    </div>
  );
};

export default TimerAlerta; 