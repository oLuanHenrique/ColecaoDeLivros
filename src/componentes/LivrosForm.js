import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// Estilos CSS para o componente de formulário
const formStyle = {
  padding: "16px",
  maxWidth: "400px",
  margin: "auto"
};

// Estilo CSS para os botões do formulário
const buttonStyle = {
  marginRight: "8px"
};

// Componente GameForm responsável por adicionar um novo jogo
function LivrosForm({ handleAddLivros, setShowForm }) {
  // Estado local para armazenar os dados do novo jogo
  const [newLivros, setNewLivros] = useState({
    titulo: "",
    autor: "",
    editora: "",
    genero: "",
    numPage: "",
    finalizado: ""
  });

  // Função para atualizar o estado quando os campos do formulário são preenchidos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLivros({ ...newLivros, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página após o envio
    handleAddLivros(newLivros); // Chama a função para adicionar um jogo
    setNewLivros({
      titulo: "",
      autor: "",
      editora: "",
      genero: "",
      numPage: "",
      finalizado: ""
    }); // Limpa os campos do formulário
  };

  return (
    <Paper elevation={3} style={formStyle}>
      <Typography variant="h6" gutterBottom>
        Adicionar Livro
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Título"
              name="titulo"
              value={newLivros.title}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Autor"
              name="autor"
              value={newLivros.platform}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Editora"
              name="editora"
              value={newLivros.platform}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Gênero"
              name="genero"
              value={newLivros.platform}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Número de páginas "
              name="numPage"
              value={newLivros.platform}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Finalizado
              </FormLabel>
              <RadioGroup
                name="finalizado"
                value={newLivros.platform}
                onChange={handleInputChange}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="não" control={<Radio />} label="Não" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <div style={{ marginTop: "16px" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={buttonStyle}
          >
            Adicionar
          </Button>
          <Button onClick={() => setShowForm(false)} style={buttonStyle}>
            Cancelar
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default LivrosForm; // Exportação do componente GameForm
