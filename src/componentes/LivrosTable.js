// Importações necessárias do React e do Material-UI
import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// Estilos CSS para elementos específicos do componente
const tableStyle = {
  minWidth: 650,
  margin: "auto",
  marginTop: "20px"
};

const headerCellStyle = {
  backgroundColor: "#f5f5f5",
  fontWeight: "bold"
};

// Componente GameTable
function LivrosTable({ livros, handleDeleteLivros, setShowForm }) {
  // Estados locais para controlar a abertura e o fechamento do diálogo de confirmação
  const [openDialog, setOpenDialog] = useState(false);
  const [livrosToDelete, setLivrosToDelete] = useState(null);

  // Função para confirmar a exclusão de um livro
  const handleConfirmDelete = () => {
    if (livrosToDelete) {
      handleDeleteLivros(livrosToDelete.id);
      setLivrosToDelete(null);
    }
    setOpenDialog(false); // Fecha o diálogo de confirmação
  };

  // Função para abrir o diálogo de confirmação antes de excluir um jogo
  const handleOpenDialog = (livro) => {
    setLivrosToDelete(livro);
    setOpenDialog(true);
  };

  return (
    <div>
      {/* Cabeçalho da tabela */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Lista de Livros 'lidos'</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => setShowForm(true)}
        >
          Adicionar Livro
        </Button>
      </Box>

      {/* Tabela de jogos */}
      <TableContainer component={Paper} style={tableStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={headerCellStyle} align="center">
                Título
              </TableCell>

              <TableCell style={headerCellStyle} align="center">
                Autor
              </TableCell>

              <TableCell style={headerCellStyle} align="center">
                Editora
              </TableCell>

              <TableCell style={headerCellStyle} align="center">
                Gênero
              </TableCell>

              <TableCell style={headerCellStyle} align="center">
                NúmeroDePáginas
              </TableCell>

              <TableCell style={headerCellStyle} align="center">
                Finalizado?
              </TableCell>

              <TableCell style={headerCellStyle} align="center">
                Ação:
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {livros.length === 0 ? ( // Verifica se a lista de jogos está vazia
              <TableRow>
                <TableCell colSpan={7} align="center">
                  <Typography variant="subtitle1">
                    Você não leu nenhum livro!
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              // Mapeia e exibe os jogos na tabela
              livros.map((livro) => (
                <TableRow key={livro.id}>
                  <TableCell align="center">{livro.titulo}</TableCell>
                  <TableCell align="center">{livro.autor}</TableCell>
                  <TableCell align="center">{livro.editora}</TableCell>
                  <TableCell align="center">{livro.genero}</TableCell>
                  <TableCell align="center">{livro.numPage}</TableCell>
                  <TableCell align="center">{livro.finalizado}</TableCell>
                  <TableCell align="center">
                    {/* Botão para excluir um jogo */}
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleOpenDialog(livro)}
                    >
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Diálogo de confirmação para excluir um jogo */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          Tem certeza de que deseja excluir o livro "{livrosToDelete?.titulo}"?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LivrosTable; // Exportação do componente GameTable
