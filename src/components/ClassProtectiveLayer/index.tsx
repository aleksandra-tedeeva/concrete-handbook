import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ClassProtectiveLayer = () => {
  return (
    <>
      <Box sx={{ padding: '0px 16px 16px 16px' }}>
        <Typography component="div">Минимальные значения толщины защитного слоя бетона</Typography>
      </Box>
      <TableContainer>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell className="sticky-cell highest-z-index highlight-cell--gray">
                Условия эксплуатации конструкций зданий
              </TableCell>
              <TableCell className="highlight-cell--gray">
                Толщина защитного слоя бетона, мм, не менее
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>В закрытых помещениях при нормальной и пониженной влажности</TableCell>
              <TableCell>20,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                В закрытых помещениях при повышенной влажности (при отсутствии дополнительных
                защитных мероприятий)
              </TableCell>
              <TableCell>25,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                На открытом воздухе (при отсутствии дополнительных защитных мероприятий)
              </TableCell>
              <TableCell>30,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                В грунте (при отсутствии дополнительных защитных мероприятий), в фундаментах при
                наличии бетонной подготовки
              </TableCell>
              <TableCell>40,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ClassProtectiveLayer;
