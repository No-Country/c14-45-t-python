import { Button, Toolbar, AppBar, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CategoriesHook from '../hooks/CategoriesHook';


const BarTwo = () => {
	const [categories] = CategoriesHook();
	return (
		<>
			<AppBar position="static" color="background">
				<Toolbar>
					<Grid container>
						<Grid item xs={6} md={6} lg={6}>
							<Grid container justifyContent="flex-start">
								<Grid item xs={4} md={4} lg={4}>
									<FormControl fullWidth>
										<InputLabel color='secondary'>Categorias</InputLabel>
										<Select
											label="Categorias"
											color='secondary'
											defaultValue={0}
										>
											<MenuItem value={0}>Todas</MenuItem>
											{categories && categories.map((category) => (
												<MenuItem key={category.id} value={category.id}>{category.category}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={2} md={2} lg={2}>
									<Button variant="text" color='secondary'>Rebajas</Button>
								</Grid>
								<Grid item xs={2} md={2} lg={2}>
									<Button variant="text" color='secondary'>Remates</Button>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6} md={6} lg={6} textAlign={'right'}>
							<CreditCardIcon fontSize='medium' />
							<CreditCardIcon fontSize='medium' />
							<CreditCardIcon fontSize='medium' />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default BarTwo