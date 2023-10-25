import { Link } from 'react-router-dom';
import { Button, InputAdornment, TextField, Toolbar, AppBar, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LogoHome from '/logo-home.svg'

const BarOne = () => {
	return (
		<>
			<AppBar position="static" color="background">
				<Toolbar>
					<Grid container>
						<Grid item xs={4} md={4} lg={4}>
							<img src={LogoHome} className="home-logo" />
						</Grid>
						<Grid item xs={4} md={4} lg={4} textAlign="center">
							<TextField fullWidth placeholder='Search...' variant="filled" InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<SearchIcon fontSize='large' />
									</InputAdornment>
								),
							}} />
						</Grid>
						<Grid item xs={4} md={4} lg={4}>
							<Grid container justifyContent="flex-end">
								<Grid item xs={4} md={4} lg={4}>
									{/* <Link to='login'> */}
										<Button variant="contained" color='secondary'>Carrito</Button>
									{/* </Link> */}
								</Grid>
								<Grid item xs={4} md={4} lg={4}>
									<Link to='login'>
										<Button variant="contained" color='secondary'>Iniciar Sesion</Button>
									</Link>
								</Grid>
								<Grid item xs={4} md={4} lg={4}>
									<Link to='register'>
										<Button variant="contained" color='primary'>Registrarse</Button>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default BarOne