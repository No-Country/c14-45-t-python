import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductsHook from '../../hooks/ProductsHooks';

const Products = () => {
	const [products] = ProductsHook();
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Nombre</TableCell>
						<TableCell>Marca</TableCell>
						<TableCell>Descripcion</TableCell>
						<TableCell>Precio</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map((row) => (
						<TableRow
							key={row.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.brand}</TableCell>
							<TableCell>{row.description}</TableCell>
							<TableCell>{row.price}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default Products