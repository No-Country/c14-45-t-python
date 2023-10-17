import { Button, Grid, TextField } from '@mui/material'

const Register = () => {
	return (
		<>
			<Grid container justifyContent='center'>
				<Grid item xs={4} md={4} lg={4}>
					<h1>Registrarse</h1>
					<form>
						<TextField
							label="Nombres"
							variant="outlined"
							name="firstName"
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Apellidos"
							variant="outlined"
							name="lastName"
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Correo"
							variant="outlined"
							name="email"
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Contraseña"
							variant="outlined"
							type="password"
							name="password"
							fullWidth
							margin="normal"
						/>
						<Button variant="contained" color="primary">
							Registrarse
						</Button>
					</form>
				</Grid>
			</Grid>
		</>
	)
}

export default Register