import React, { useState, useEffect } from 'react';

const RequisicaoDados = () => {
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarPosts = async () => {
    setCarregando(true);
    setErro(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      const data = await response.json();
      setPosts(data.slice(0, 10)); // Limitando a 10 posts para exemplo
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarPosts();
  }, []);

  return (
    <div className="requisicao-dados-container">
      <h2>Posts da API</h2>
      <button onClick={buscarPosts} disabled={carregando}>
        {carregando ? 'Carregando...' : 'Recarregar Posts'}
      </button>

      {erro && <p className="erro">Erro: {erro}</p>}

      {carregando ? (
        <p>Carregando posts...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequisicaoDados; 