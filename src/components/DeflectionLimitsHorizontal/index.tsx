import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DeflectionLimitsHorizontal = () => {
  return (
    <TableContainer>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell className="highlight-cell--gray">Группы режимов работы кранов</TableCell>
            <TableCell className="highlight-cell--gray">
              Предельные прогибы колонн зданий и крытых крановых эстакад
            </TableCell>
            <TableCell className="highlight-cell--gray">
              Предельные прогибы колонн открытых крановых эстакад
            </TableCell>
            <TableCell className="highlight-cell--gray">
              Предельные прогибы балок крановых путей и тормозных конструкций, зданий и крановых
              эстакад (крытых и открытых)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1К - 3К</TableCell>
            <TableCell>h/500</TableCell>
            <TableCell>h/1500</TableCell>
            <TableCell>l/500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4К - 6К</TableCell>
            <TableCell>h/1000</TableCell>
            <TableCell>h/2000</TableCell>
            <TableCell>l/1000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7К - 8К</TableCell>
            <TableCell>h/2000</TableCell>
            <TableCell>h/2500</TableCell>
            <TableCell>l/2000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DeflectionLimitsHorizontal;
