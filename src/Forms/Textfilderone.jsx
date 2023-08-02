import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AppTitle = () => {
  const titleStyle = {
    fontSize: '24px', // Tamanho da fonte desejado (por exemplo, 24px)
    fontWeight: 'bold', // Pode definir a fonte em negrito se quiser
    marginBottom: '10px', // Espaçamento inferior entre o título e o formulário (por exemplo, 10px)
  };
  return (
    <>
    <div style={titleStyle} >Calcular IMC Seu:</div>
    <Stack
      component="form"
      sx={{
        width: '25ch',
        marginTop: '1rem', // Espaçamento de 1 rem (ou outro valor) acima do formulário
      }}
      spacing={5}
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
      <Button variant="Contained">Calcular IMC </Button>
    </Stack>


  </>
  );
};

export default AppTitle;