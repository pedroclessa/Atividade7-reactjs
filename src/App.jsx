import React, { useState } from 'react';
import Contador from './components/Contador';
import AlteradorCor from './components/AlteradorCor';
import ListaTarefas from './components/ListaTarefas';
import Temporizador from './components/Temporizador';
import FiltroLista from './components/FiltroLista';
import FormularioRegistro from './components/FormularioRegistro';
import RequisicaoDados from './components/RequisicaoDados';
import GaleriaImagens from './components/GaleriaImagens';
import TimerAlerta from './components/TimerAlerta';
import TabsNavegaveis from './components/TabsNavegaveis';
import './App.css';

const App = () => {
  const [componenteAtivo, setComponenteAtivo] = useState(null);

  const componentes = {
    contador: { nome: 'Contador', componente: <Contador /> },
    alteradorCor: { nome: 'Alterador de Cor', componente: <AlteradorCor /> },
    listaTarefas: { nome: 'Lista de Tarefas', componente: <ListaTarefas /> },
    temporizador: { nome: 'Temporizador', componente: <Temporizador /> },
    filtroLista: { nome: 'Filtro de Lista', componente: <FiltroLista /> },
    formularioRegistro: { nome: 'Formulário de Registro', componente: <FormularioRegistro /> },
    requisicaoDados: { nome: 'Requisição de Dados', componente: <RequisicaoDados /> },
    galeriaImagens: { nome: 'Galeria de Imagens', componente: <GaleriaImagens /> },
    timerAlerta: { nome: 'Timer com Alerta', componente: <TimerAlerta /> },
    tabsNavegaveis: { nome: 'Tabs Navegáveis', componente: <TabsNavegaveis /> }
  };

  return (
    <div className="app-container">
      <h1>Atividade React - Componentes</h1>
      
      <nav className="menu-navegacao">
        {Object.entries(componentes).map(([key, { nome }]) => (
          <button
            key={key}
            onClick={() => setComponenteAtivo(key)}
            className={componenteAtivo === key ? 'ativo' : ''}
          >
            {nome}
          </button>
        ))}
      </nav>

      <main className="conteudo-principal">
        {componenteAtivo ? (
          <div className="componente-container">
            {componentes[componenteAtivo].componente}
          </div>
        ) : (
          <p className="mensagem-inicial">
            Selecione um componente no menu acima para começar
          </p>
        )}
      </main>
    </div>
  );
};

export default App; 