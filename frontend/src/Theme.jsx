import { ThemeProvider, createTheme } from '@mui/material';
import PropTypes from 'prop-types';

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFF',
		}
	},
});

const Theme = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	)
}

Theme.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Theme