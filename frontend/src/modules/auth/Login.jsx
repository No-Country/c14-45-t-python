import { Button, Grid, TextField } from '@mui/material'
import LoginHook from '../../hooks/LoginHook'

const Login = () => {
	const [login, setLogin, doLogin] = LoginHook();
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
							value={login.email}
							onChange={(e) => setLogin({ ...login, email: e.target.value })}
						/>
						<TextField
							label="Contraseña"
							variant="outlined"
							type="password"
							name="password"
							fullWidth
							margin="normal"
							value={login.password}
							onChange={(e) => setLogin({ ...login, password: e.target.value })}	
						/>
						<Button variant="contained" color="primary" onClick={() => doLogin()}>
							Iniciar Sesion
						</Button>
					</form>
				</Grid>
				<Grid container justifyContent='center'>
					<Grid item xs={4} md={4} lg={4}>
						{ login.errorMsj }	
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

export default Login