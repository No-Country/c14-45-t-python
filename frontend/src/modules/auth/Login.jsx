import { Button, Grid, TextField } from '@mui/material'

const Login = () => {
	return (
		<>
			<Grid container justifyContent='center'>
				<Grid item xs={4} md={4} lg={4}>
					<h1>Iniciar Sesion</h1>
					<form>
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
							Iniciar Sesion
						</Button>
					</form>
				</Grid>
			</Grid>
		</>
	)
}

export default Login