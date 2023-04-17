import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../store/hooks";

const ClassResilience = () => {
  const { headers, resilience } = useAppSelector((state) => state.class);
  return (
    <>
      <Box sx={{ padding: "0px 16px 16px 16px" }}>
        <Typography component="div">
          Значения начального модуля упругости бетона E<sub>b</sub> (МПА/1000)
          при сжатии и растяжении при классе бетона по прочности на сжатие
        </Typography>
      </Box>
      <TableContainer className="big-table-height-fix">
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
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
              <TableCell className="sticky-cell">Тяжелый</TableCell>
              {resilience.heavy.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ fontWeight: 500 }}
                className="sticky-cell highlight-cell--gray"
              >
                Мелкозернистых групп
              </TableCell>
              {resilience.grain_natural.map((val, idx) => (
                <TableCell
                  className="highlight-cell--gray"
                  key={idx}
                ></TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">
                А - естественного твердения
              </TableCell>
              {resilience.grain_natural.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">
                Б - автоклавного твердения
              </TableCell>
              {resilience.grain_autoclave.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ fontWeight: 500 }}
                className="sticky-cell highlight-cell--gray"
              >
                Легкий и поризованный марки по средней плотности D
              </TableCell>
              {resilience.grain_natural.map((val, idx) => (
                <TableCell
                  className="highlight-cell--gray"
                  key={idx}
                ></TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">800</TableCell>
              {resilience.light_800.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">1000</TableCell>
              {resilience.light_1000.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">1200</TableCell>
              {resilience.light_1200.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">1400</TableCell>
              {resilience.light_1400.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">1600</TableCell>
              {resilience.light_1600.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">1800</TableCell>
              {resilience.light_1800.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">2000</TableCell>
              {resilience.light_2000.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ fontWeight: 500 }}
                className="sticky-cell highlight-cell--gray"
              >
                Ячеистый автоклавного твердения марки по средней плотности D
              </TableCell>
              {resilience.grain_natural.map((val, idx) => (
                <TableCell
                  className="highlight-cell--gray"
                  key={idx}
                ></TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">500</TableCell>
              {resilience.cellular_500.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">600</TableCell>
              {resilience.cellular_600.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">700</TableCell>
              {resilience.cellular_700.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">800</TableCell>
              {resilience.cellular_800.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">900</TableCell>
              {resilience.cellular_900.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">1000</TableCell>
              {resilience.cellular_1000.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">1100</TableCell>
              {resilience.cellular_1100.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="sticky-cell">1200</TableCell>
              {resilience.cellular_1200.map((val, idx) => (
                <TableCell key={idx}>{val}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ padding: "16px 0px" }}>
        <Typography component="div">
          1. Для мелкозернистого бетона группы А, подвергнутого тепловой
          обработке или при атмосферном давлении, значения начальных модулей
          упругости бетона следует принимать с коэффициентом 0,89
        </Typography>
        <Typography component="div">
          2. Для легкого, ячеистого и поризованного бетонов при промежуточных
          значениях плотности бетона начальные модули упругости принимают по
          линейной интерполяции
        </Typography>
        <Typography component="div">
          3. Для ячеистого бетона неавтоклавного твердения значения Еb принимают
          как для бетона автоклавного твердения с умножением на коэффициент 0,8
        </Typography>
        <Typography component="div">
          4. Для напрягающего бетона значения Еb принимают как для тяжелого
          бетона с умножением на коэффициент a = 0,56 + 0,006В
        </Typography>
      </Box>
    </>
  );
};

export default ClassResilience;
