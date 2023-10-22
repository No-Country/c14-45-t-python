import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';

import BarOne from './BarOne';
import BarTwo from './BarTwo';
import BarFooter from './BarFooter';

const MainLayout = () => {
	return (
		<div id="page-container">
			<header id="header-wrap">
				<Grid container>
					<Grid item xs={12} md={12} lg={12}>
						<BarOne />
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<BarTwo />
					</Grid>
				</Grid>
			</header>
			<section id="content-wrap">
				<Grid container>
					<Grid item xs={12} md={12} lg={12}>
						<Outlet />
					</Grid>
				</Grid>
			</section>
			<footer id="footer-wrap">
				<Grid container>
					<Grid item xs={12} md={12} lg={12} >
						<BarFooter />
					</Grid>
				</Grid>
			</footer>
		</div>
	)
}

export default MainLayout