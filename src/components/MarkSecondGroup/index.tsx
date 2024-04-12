import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../store/hooks';

const MarkSecondGroup = () => {
  const { headers, second_group } = useAppSelector((state) => state.mark);
  return (
    <>
      <Box sx={{ padding: '0px 16px 16px 16px' }}>
        <Typography component="div">
          Нормативные сопротивления бетона R<sub>np</sub>*R<sub>p</sub> и расчетные сопротивления
          бетона для предельных состояний второй группы R<sub>npll</sub> и R<sub>pll</sub> (кгс/см
          <sup>2</sup>) при проектной марке бетона по прочности на сжатие
        </Typography>
      </Box>
      <TableContainer>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell className="sticky-cell highest-z-index highlight-cell--gray">
                Вид Сопротивления
              </TableCell>
              <TableCell className="sticky-cell highest-z-index highlight-cell--gray">
                Бетон
              </TableCell>
              {headers.map((value) => (
                <TableCell className="highlight-cell--gray" key={value}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="sticky-cell">
                Сжатие осевое (призменная прочность) Rnp и Rnpll
              </TableCell>
              <TableCell className="sticky-cell">Тяжелый</TableCell>
              {second_group.compression_heavy.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">На пористых заполнителях</TableCell>
              {second_group.compression_aerated.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Ячеистый вида А</TableCell>
              {second_group.compression_cellular_a.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Ячеистый вида Б</TableCell>
              {second_group.compression_cellular_b.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">Растяжение осевое Rp и Rpll</TableCell>
              <TableCell className="sticky-cell">Тяжелый</TableCell>
              {second_group.expansion_heavy.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">
                На пористых заполнителях при мелком плотном заполнителе
              </TableCell>
              {second_group.expansion_aerated_dense.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">
                На пористых заполнителях при мелком пористом заполнителе
              </TableCell>
              {second_group.expansion_aerated_porous.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Ячеистый вида А</TableCell>
              {second_group.expansion_cellular_a.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Ячеистый вида Б</TableCell>
              {second_group.expansion_cellular_b.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MarkSecondGroup;
