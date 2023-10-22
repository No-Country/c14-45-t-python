import { ThemeProvider, createTheme } from '@mui/material';
import PropTypes from 'prop-types';

const theme = createTheme({
	palette: {
		primary: {
			main: '#1E5F3C',
		},
		secondary: {
			main: '#E3B23C',
		},
		background: {
			default: '#AAAAAA',
		},
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