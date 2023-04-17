import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../store/hooks";

const ClassSecondGroup = () => {
  const { headers, second_group } = useAppSelector((state) => state.class);
  return (
    <>
      <Box sx={{ padding: "0px 16px 16px 16px" }}>
        <Typography component="div">
          Нормативные сопротивления бетона R<sub>bn</sub>*R<sub>btn</sub> (МПа)
          и расчетные сопротивления бетона для предельных состояний второй
          группы R<sub>b,ser</sub> и R<sub>bt,ser</sub> (МПа) при классе бетона
          по прочности на сжатие
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
                Сжатие осевое (призменная прочность) Rbn и Rb,ser
              </TableCell>
              <TableCell className="sticky-cell">
                Тяжелый и мелкозернистый и напрягающий
              </TableCell>
              {second_group.compression_heavy.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Легкий</TableCell>
              {second_group.compression_light.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Ячеистый</TableCell>
              {second_group.compression_cellular.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">
                Растяжение осевое Rbtn и Rbt,ser
              </TableCell>
              <TableCell className="sticky-cell">
                Тяжелый и мелкозернистый и напрягающий
              </TableCell>
              {second_group.expansion_heavy.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Легкий</TableCell>
              {second_group.expansion_light.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell"></TableCell>
              <TableCell className="sticky-cell">Ячеистый</TableCell>
              {second_group.expansion_cellular.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ padding: "16px 0px" }}>
        <Typography component="div">
          1. Значения сопротивлений приведены для ячеистого бетона средней
          влажностью 10%
        </Typography>
        <Typography component="div">
          2. Для мелкозернистого бетона на песке с модулем крупности 2.0 и
          менее, а также для легкого бетона на мелком пористом заполнителе
          значения расчетных сопротивлений Rbn и Rb,ser следует принимать с
          умножением на коэффициент 0.8
        </Typography>
        <Typography component="div">
          3. Для поризованного бетона, а также для керамзитоперлитобетона на
          вспученном перлитовом песке значения расчетных сопротивлений Rbtn и
          Rbt,serследует принимать как для легкого бетона с умножением на
          коэффициент 0.7
        </Typography>
        <Typography component="div">
          4. Для напрягающего бетона значения Rbtn и Rbt,ser следует принимать с
          умножением на коэффициент 1.2
        </Typography>
      </Box>
    </>
  );
};

export default ClassSecondGroup;
