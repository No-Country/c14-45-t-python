import { ThemeProvider, createTheme } from '@mui/material';
import PropTypes from 'prop-types';

const theme = createTheme({
	palette: {
		primary: {
			main: '#1C7C54',
		},
		secondary: {
			main: '#E5B94E',
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