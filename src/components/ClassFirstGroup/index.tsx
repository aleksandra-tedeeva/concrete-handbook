import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../store/hooks";

const ClassFirstGroup = () => {
  const { headers, first_group } = useAppSelector((state) => state.class);
  return (
    <>
      <Box sx={{ padding: "0px 16px 16px 16px" }}>
        <Typography component="div">
          Расчетные сопротивления бетона для предельных состояний первой группы
          R<sub>b</sub> и R<sub>bt</sub> (МПа) при классе бетона по прочности на
          сжатие
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
                Сжатие осевое (призменная прочность) Rb
              </TableCell>
              <TableCell className="sticky-cell">
                Тяжелый и мелкозернистый и напрягающий
              </TableCell>
              {first_group.compression_heavy.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Легкий</TableCell>
              {first_group.compression_light.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Ячеистый</TableCell>
              {first_group.compression_cellular.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">
                Растяжение осевое Rbt
              </TableCell>
              <TableCell className="sticky-cell">
                Тяжелый, мелкозернистый и напрягающий
              </TableCell>
              {first_group.expansion_heavy.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Легкий</TableCell>
              {first_group.expansion_light.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Ячеистый</TableCell>
              {first_group.expansion_cellular.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ClassFirstGroup;
