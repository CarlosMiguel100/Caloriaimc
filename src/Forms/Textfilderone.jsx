import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AppTitle = () => {
  const titleStyle = {
    fontSize: '45px', // Tamanho da fonte desejado (por exemplo, 24px)
    fontWeight: 'bold', // Pode definir a fonte em negrito se quiser
    marginBottom: '10px', // Espaçamento inferior entre o título e o formulário (por exemplo, 10px)
    textAlign: 'center',  // Centraliza o título
  };
  return (
    <>
      <div style={titleStyle}>Calcular IMC Seu:</div>
      <Stack
        component="form"
        sx={{
          width: '100%', // Largura máxima do formulário
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centraliza o conteúdo verticalmente
          marginTop: '1rem',// Espaçamento de 1 rem (ou outro valor) acima do formulário
        }}
        spacing={2} // Espaçamento entre os campos
        noValidate
        autoComplete="off"
      >
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Peso"
          variant="filled"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Altura"
          variant="filled"
        />
        <Button variant="contained">Calcular IMC</Button>
      </Stack>
    </>
  );
};

export default AppTitle;