import { Button, Toolbar, AppBar, Grid } from '@mui/material';
import Logo from '/logo.svg'

const BarFooter = () => {
	return (
		<>
			<AppBar position="static" color="primary">
				<Toolbar>
					<Grid container>
						<Grid item xs={12} md={12} lg={12}>
							<Grid container justifyContent="flex-start">
								<Grid item xs={3} md={3} lg={3}>
									<Button variant="text" color='secondary'>Preguntas Frecuentes</Button>
								</Grid>
								<Grid item xs={1} md={1} lg={1}>
									<Button variant="text" color='secondary'>Contacto</Button>
								</Grid>
								<Grid item xs={1} md={1} lg={1}>
									<Button variant="text" color='secondary'>Ayuda</Button>
								</Grid>
								<Grid item xs={3} md={3} lg={3}>
									<Button variant="text" color='secondary'>Terminos y Condiciones</Button>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6} md={6} lg={6}>
							<Grid item xs={12} md={12} lg={12}>
								Desarrollado por el equipo c14-45-t-python para el Cohorte 14 de No Country
							</Grid>
							<Grid item xs={12} md={12} lg={12}>
								Todos los derechos reservados © 2023
							</Grid>
						</Grid>
						<Grid item xs={6} md={6} lg={6} textAlign={'right'}>
							<img src={Logo} className="footer-logo" />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default BarFooter