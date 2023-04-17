import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const ServiceFactorCoefficients = () => {
  return (
    <TableContainer sx={{ paddingTop: "16px" }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell className="highlight-cell--gray">
              Коэффициенты условий работы учитывающие особенности работы бетона
              в конструкции (характер нагрузки, условия окружающей среды и т.д.)
            </TableCell>
            <TableCell className="highlight-cell--gray" align="center">
              Условное обозначение
            </TableCell>
            <TableCell className="highlight-cell--gray" align="center">
              Числовое значение
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              1. Коэффициент условий работы для бетонных и железобетонных
              конструкций, вводимый к расчетным значениям сопротивлений Rb и Rbt
              и учитывающий влияние длительности действия статической нагрузки:
            </TableCell>
            <TableCell rowSpan={3} align="center">
              &#947;b1
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              а) при непродолжительном (кратковременном) действии нагрузки
            </TableCell>

            <TableCell align="center">1.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              б) при продолжительном (длительном) действии нагрузки
            </TableCell>

            <TableCell align="center">0.9</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              2. Коэффициент условий работы для бетонных конструкций, вводимый к
              расчетным значениям сопротивления Rb и учитывающий характер
              разрушения таких конструкций
            </TableCell>
            <TableCell align="center">&#947;b2</TableCell>
            <TableCell align="center">0.9</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              3. Коэффициент условий работы для бетонных и железобетонных
              конструкций, бетонируемых в вертикальном положении при высоте слоя
              бетонирования свыше 1,5 м, вводимый к расчетному значению
              сопротивления бетона Rb
            </TableCell>
            <TableCell align="center">&#947;b3</TableCell>
            <TableCell align="center">0.85</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              4. Коэффициент условий работы, учитывающий влияние попеременного
              замораживания и оттаивания, а также отрицательных температур:
            </TableCell>
            <TableCell rowSpan={3} align="center">
              &#947;b4
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              а) для наземных конструкций, подвергаемых атмосферным воздействиям
              окружающей среды при расчетной температуре наружного воздуха в
              холодный период минус 40С и выше
            </TableCell>

            <TableCell align="center">1.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              б) в остальных случаях значения коэффициента принимают в
              зависимости от назначения конструкции и условий окружающей среды
              согласно указаниям Свода Правил &#171;Бетонные и железобетонные
              конструкции, подвергающиеся технологическим и климатическим
              температурно-влажностным воздействиям&#187;.
            </TableCell>

            <TableCell align="center">{"<=1.0"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServiceFactorCoefficients;
