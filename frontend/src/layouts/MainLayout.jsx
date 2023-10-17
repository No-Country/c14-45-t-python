import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';

import BarOne from './BarOne';
import BarTwo from './BarTwo';

const MainLayout = () => {
	return (
		<>
			<Grid container>
				<Grid item xs={12} md={12} lg={12}>
					<BarOne />
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<BarTwo />
				</Grid>
			</Grid>
			<section>
				<Outlet />
			</section>
		</>
	)
}

export default MainLayout