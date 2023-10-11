import { Outlet } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';


import { Button, InputAdornment, TextField, Toolbar, AppBar, Grid, IconButton } from '@mui/material';

const MainLayout = () => {
	return (
		<>
			<Grid container>
				<Grid item xs={12} md={12} lg={12}>
					<AppBar position="static">
						<Toolbar>
							<Grid container spacing={3}>
								<Grid item xs={4} md={4} lg={4}>
									LOGO
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
								<Grid item xs={4} md={4} lg={4} textAlign="right">
									<CreditCardIcon fontSize='medium' />
									<CreditCardIcon fontSize='medium' />
									<CreditCardIcon fontSize='medium' />
								</Grid>
							</Grid>
						</Toolbar>
					</AppBar>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<AppBar position="static">
						<Toolbar>
							<Grid container spacing={3}>
								<Grid item xs={6} md={6} lg={6}>
									<Button variant="text" color='secondary'>Categorias</Button>
									<Button variant="text" color='secondary'>Remates</Button>
									<Button variant="text" color='secondary'>Remates</Button>
								</Grid>
								<Grid item xs={6} md={6} lg={6} textAlign="right">
									<Button variant="text" color='secondary'>Iniciar Sesion</Button>
									<Button variant="contained" color='secondary'>Registrarse</Button>
									<IconButton>
										<ShoppingCartIcon fontSize='large' />
									</IconButton>
								</Grid>
							</Grid>
						</Toolbar>
					</AppBar>
				</Grid>
			</Grid>
			<section>
				<Outlet />
			</section>
		</>
	)
}

export default MainLayout