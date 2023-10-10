// Importações necessárias do React e de outras bibliotecas
import React, { useState, useEffect } from "react";
import axios from "axios";
import LivrosForm from "./componentes/LivrosForm";
import LivrosTable from "./componentes/LivrosTable";

import {
  CssBaseline,
  Container,
  Typography,
  AppBar,
  Toolbar
} from "@mui/material";
import API_URL from "./config";

// Estilos CSS para elementos específicos do componente
const appBarStyle = {
  marginBottom: "20px"
};

const pageTitleStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px"
};

// Componente principal da aplicação
function App() {
  // Estados locais para armazenar a lista de jogos e controlar a exibição do formulário
  const [livros, setLivros] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Efeito colateral para buscar a lista de jogos ao montar o componente
  useEffect(() => {
    fetchLivros();
  }, []);

  // Função assíncrona para buscar a lista de jogos da API
  const fetchLivros = async () => {
    try {
      const response = await axios.get(`${API_URL}/livros`);
      setLivros(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  // Função para adicionar um novo jogo à coleção
  const handleAddGame = async (newLivros) => {
    try {
      await axios.post(`${API_URL}/livros`, newLivros);
      fetchLivros(); // Atualiza a lista de jogos após a adição
      setShowForm(false); // Fecha o formulário de adição
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
    }
  };

  // Função para excluir um jogo da coleção
  const handleDeleteLivros = async (livrosId) => {
    try {
      await axios.delete(`${API_URL}/livros/${livrosId}`);
      fetchLivros(); // Atualiza a lista de jogos após a exclusão
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
    }
  };

  // Renderização do componente
  return (
    <div>
      <CssBaseline />
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          <Typography variant="h6">Coleção de Livros </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" style={pageTitleStyle}>
          Coleção de Livros
        </Typography>
        {/* Condicional para renderizar o formulário ou a tabela de jogos */}
        {showForm ? (
          <LivrosForm
            handleAddLivros={handleAddGame}
            setShowForm={setShowForm}
          />
        ) : (
          <LivrosTable
            livros={livros}
            handleDeleteLivros={handleDeleteLivros}
            setShowForm={setShowForm}
          />
        )}
      </Container>
    </div>
  );
}

export default App; // Exportação do componente principal
