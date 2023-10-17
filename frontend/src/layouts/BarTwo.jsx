import { Link } from 'react-router-dom';
import { Button, Toolbar, AppBar, Grid, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BarTwo = () => {
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Grid container spacing={3}>
						<Grid item xs={6} md={6} lg={6}>
							<Grid container spacing={3} justifyContent="flex-start">
								<Grid item xs={2} md={2} lg={2}>
									<FormControl fullWidth>
										<InputLabel color='secondary'>Categorias</InputLabel>
										<Select
											label="Categorias"
											color='secondary'
											defaultValue={0}
										>
											<MenuItem value={0}>Todas</MenuItem>
											<MenuItem value={1}>Categoria 1</MenuItem>
											<MenuItem value={2}>Categoria 2</MenuItem>
											<MenuItem value={3}>Categoria 3</MenuItem>
											<MenuItem value={4}>Categoria 4</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={2} md={2} lg={2}>
									<Button variant="text" color='secondary'>Remates</Button>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6} md={6} lg={6}>
							<Grid container spacing={3} justifyContent="flex-end">
								<Grid item xs={2} md={2} lg={2}>
									<Link to='login'>
										<Button variant="text" color='secondary'>Iniciar Sesion</Button>
									</Link>
								</Grid>
								<Grid item xs={2} md={2} lg={2}>
									<Link to='register'>
										<Button variant="contained" color='secondary'>Registrarse</Button>
									</Link>
								</Grid>
								<Grid item xs={2} md={2} lg={2}>
									<IconButton>
										<ShoppingCartIcon fontSize='large' />
									</IconButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default BarTwo