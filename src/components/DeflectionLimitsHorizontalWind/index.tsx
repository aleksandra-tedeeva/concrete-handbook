import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const DeflectionLimitsHorizontalWind = () => {
  return (
    <TableContainer>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell className="highlight-cell--gray">
              Здания, стены и перегородки
            </TableCell>
            <TableCell className="highlight-cell--gray">
              Крепление стен и перегородок к каркасу здания
            </TableCell>
            <TableCell className="highlight-cell--gray">
              Предельные перемещения
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1. Многоэтажные здания</TableCell>
            <TableCell>Любое</TableCell>
            <TableCell>h/500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2. Один этаж многоэтажных зданий:</TableCell>
            <TableCell>Податливое</TableCell>
            <TableCell>
              h<sub>s</sub>/300
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              а) стены и перегородки из кирпича, гипсобетона, железобетонных
              панелей
            </TableCell>
            <TableCell rowSpan={2}>Жесткое</TableCell>
            <TableCell>
              h<sub>s</sub>/500
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              б) стены, облицованные естественным камнем, из керамических
              блоков, из стекла (витражи)
            </TableCell>

            <TableCell>
              h<sub>s</sub>/700
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              3. Одноэтажные здания (с самонесущими стенами) высотой этажа hs,
              м:
            </TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              h<sub>s</sub> {"<= 6"}
            </TableCell>
            <TableCell rowSpan={3}>Податливое</TableCell>
            <TableCell>
              h<sub>s</sub>/150
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              h<sub>s</sub> = 15
            </TableCell>

            <TableCell>
              h<sub>s</sub>/200
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              h<sub>s</sub> {">= 30"}
            </TableCell>

            <TableCell>
              h<sub>s</sub>/300
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DeflectionLimitsHorizontalWind;
