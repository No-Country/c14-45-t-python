import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Contact() {
  // Define el estado para los campos del formulario
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    comment: '',
  });

  // Función para manejar los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el clic en el botón "Enviar"
  const handleSubmit = () => {
    // Muestra el valor del formulario en la consola
    console.log('Formulario enviado:', formData);
  };

  return (
    <div>
      <h1>Contact us</h1>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div style={{ display: 'block' }}>
            <TextField
              required
              id="outlined-required-name"
              label="Full name"
              variant="outlined"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              fullWidth
            />
          </div>
        </Grid>

        <Grid item xs={2}>
          <div style={{ display: 'block' }}>
            <TextField
              required
              id="outlined-required-email"
              label="Email address"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
            />
          </div>
        </Grid>
      </Grid>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '65ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows={4}
            variant="outlined"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            fullWidth
          />
        </div>
      </Box>

      <div>
        <Button variant="contained" onClick={handleSubmit}>
          Enviar
        </Button>
      </div>
    </div>
  );
}

export default Contact;
