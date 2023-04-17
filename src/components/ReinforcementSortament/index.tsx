import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../store/hooks";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";

const ReinforcementSortament = () => {
  const [value, setValue] = useState("");
  const [epsilon, setEpsilon] = useState("5");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const { data } = useAppSelector((state) => state.reinforcement);
  const arr = ["", "", "", "", "", "", "", "", ""];

  const findArea = () => {
    const v = Number.parseFloat(value);
    const e = Number.parseFloat(epsilon);
    if (v && e && v > 0 && e > 0 && e < 100) {
      const percent = e / 100;
      const delta = v * percent;
      setMin(v - delta);
      setMax(v + delta);
    }
  };

  const checkMinMax = (val: number) => {
    if (val >= min && val <= max) {
      return "highlight-cell--blue";
    }
    return "";
  };

  useEffect(() => {
    findArea();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, epsilon]);

  return (
    <>
      <Box sx={{ paddingTop: "8px" }}>
        <Typography component="div" variant="h6">
          Сортамент арматуры
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "8px" }}>
        <Typography component="div" variant="subtitle2">
          Поиск расчетной площади
        </Typography>
        <TextField
          onChange={(e) => setValue(e.target.value)}
          value={value}
          label="Искомое значение"
          variant="standard"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                mm<sup>2</sup>
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          onChange={(e) => setEpsilon(e.target.value)}
          value={epsilon}
          label="Погрешность"
          variant="standard"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
        ></TextField>
      </Box>
      <TableContainer className="big-table-height-fix">
        <Table stickyHeader size="small">
          <TableHead>
            <TableCell className="highlight-cell--gray highest-z-index">
              Номинальный диаметр стержня (мм)
            </TableCell>
            {arr.map((el, idx) => (
              <TableCell className="highlight-cell--gray  highest-z-index">
                Расчетная площадь поперечного стержня (мм<sup>2</sup>) при числе
                стержней {idx + 1}
              </TableCell>
            ))}
            <TableCell className="highlight-cell--gray  highest-z-index">
              Теоретическая масса 1м длины арматуры (кг)
            </TableCell>
            <TableCell className="highlight-cell--gray  highest-z-index">
              Диаметры арматуры класса A240
            </TableCell>
            <TableCell className="highlight-cell--gray  highest-z-index">
              Диаметры арматуры класса A400
            </TableCell>
            <TableCell className="highlight-cell--gray  highest-z-index">
              Диаметры арматуры класса A500
            </TableCell>
            <TableCell className="highlight-cell--gray  highest-z-index">
              Диаметры арматуры класса A600
            </TableCell>
            <TableCell className="highlight-cell--gray  highest-z-index">
              Диаметры арматуры класса A600C
            </TableCell>
            <TableCell className="highlight-cell--gray  highest-z-index">
              Диаметры арматуры класса B500
            </TableCell>
            <TableCell className="highlight-cell--gray  highest-z-index">
              Диаметры арматуры класса Bp500
            </TableCell>
          </TableHead>
          <TableBody>
            {data.map((el) => (
              <TableRow>
                <TableCell className="sticky-cell highlight-cell--gray">
                  {el.nominal_diameter}
                </TableCell>
                <TableCell className={checkMinMax(el.cross_beam_area.beam_1)}>
                  {el.cross_beam_area.beam_1}
                </TableCell>
                <TableCell className={checkMinMax(el.cross_beam_area.beam_2)}>
                  {el.cross_beam_area.beam_2}
                </TableCell>
                <TableCell className={checkMinMax(el.cross_beam_area.beam_3)}>
                  {el.cross_beam_area.beam_3}
                </TableCell>
                <TableCell className={checkMinMax(el.cross_beam_area.beam_4)}>
                  {el.cross_beam_area.beam_4}
                </TableCell>
                <TableCell className={checkMinMax(el.cross_beam_area.beam_5)}>
                  {el.cross_beam_area.beam_5}
                </TableCell>
                <TableCell className={checkMinMax(el.cross_beam_area.beam_6)}>
                  {el.cross_beam_area.beam_6}
                </TableCell>
                <TableCell className={checkMinMax(el.cross_beam_area.beam_7)}>
                  {el.cross_beam_area.beam_7}
                </TableCell>
                <TableCell className={checkMinMax(el.cross_beam_area.beam_8)}>
                  {el.cross_beam_area.beam_8}
                </TableCell>
                <TableCell className={checkMinMax(el.cross_beam_area.beam_9)}>
                  {el.cross_beam_area.beam_9}
                </TableCell>
                <TableCell>{el.theoretical_1m}</TableCell>
                <TableCell>{el.armature_class.A240 ? "+" : ""}</TableCell>
                <TableCell>{el.armature_class.A400 ? "+" : ""}</TableCell>
                <TableCell>{el.armature_class.A500 ? "+" : ""}</TableCell>
                <TableCell>{el.armature_class.A600 ? "+" : ""}</TableCell>
                <TableCell>{el.armature_class.A600C ? "+" : ""}</TableCell>
                <TableCell>{el.armature_class.B500 ? "+" : ""}</TableCell>
                <TableCell>{el.armature_class.Bp500 ? "+" : ""}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Typography component="div">Стандарты: </Typography>
        <Typography component="div">
          при классе арматуры А240 - СТО АСЧМ 8-93{" "}
        </Typography>
        <Typography component="div">
          при классе арматуры А400 - СТО АСЧМ 7-93{" "}
        </Typography>
        <Typography component="div">
          при классе арматуры A500 - ГОСТ Р 52544-2006, СТО АСЧМ 7-93{" "}
        </Typography>
        <Typography component="div">
          при классе арматуры A600 - СТО АСЧМ 7-93{" "}
        </Typography>
        <Typography component="div">
          при классе арматуры A600C - ТУ 14-1-5596-2010{" "}
        </Typography>
        <Typography component="div">
          при классе арматуры B500 - ГОСТ Р 52544-2006, ГОСТ 6727-80, СТО АСЧМ
          7-93{" "}
        </Typography>
        <Typography component="div">
          при классе арматуры Bp500 - ГОСТ Р 52544-2006, ГОСТ 6727-80, СТО АСЧМ
          7-93{" "}
        </Typography>
      </Box>
    </>
  );
};

export default ReinforcementSortament;
