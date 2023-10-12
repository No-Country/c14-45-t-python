import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Contact() {
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
                defaultValue=""
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
                defaultValue=""
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
              defaultValue=""
              fullWidth
            />
          </div>
        </Box>
  
        <div>
          <Button variant="contained">Enviar</Button>
        </div>
      </div>
    );
  }
  
  export default Contact;
  