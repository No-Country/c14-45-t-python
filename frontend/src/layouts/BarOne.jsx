import SearchIcon from '@mui/icons-material/Search';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import { InputAdornment, TextField, Toolbar, AppBar, Grid } from '@mui/material';

const BarOne = () => {
	return (
		<>
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
		</>
	)
}

export default BarOne