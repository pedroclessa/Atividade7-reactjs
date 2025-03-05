import React, { useState } from 'react';

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validarFormulario = () => {
    const novosErros = {};
    if (!formData.nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
    }
    if (!formData.email.trim()) {
      novosErros.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      novosErros.email = 'Email inválido';
    }
    if (!formData.senha) {
      novosErros.senha = 'Senha é obrigatória';
    } else if (formData.senha.length < 6) {
      novosErros.senha = 'Senha deve ter no mínimo 6 caracteres';
    }
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      setEnviado(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (enviado) {
    return (
      <div className="boas-vindas">
        <h2>Bem-vindo(a), {formData.nome}!</h2>
        <p>Seu email registrado é: {formData.email}</p>
        <button onClick={() => setEnviado(false)}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="formulario-registro-container">
      <h2>Formulário de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          {erros.nome && <span className="erro">{erros.nome}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {erros.email && <span className="erro">{erros.email}</span>}
        </div>

        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
          {erros.senha && <span className="erro">{erros.senha}</span>}
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default FormularioRegistro; 