import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../store/hooks";

const MarkFirstGroup = () => {
  const { classToMarkMap } = useAppSelector((state) => state.class);
  return (
    <>
      <Box sx={{ padding: "0px 16px 16px 16px" }}>
        <Typography component="div">
          Соотношения между марками и классами бетона по прочности на сжатие и
          сарками при нормативном коэффициенте равном 13.5% (по ГОСТ 26633-91)
        </Typography>
      </Box>
      <TableContainer>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell className="sticky-cell highest-z-index highlight-cell--gray">
                Класс бетона по прочности
              </TableCell>
              <TableCell className="sticky-cell highest-z-index highlight-cell--gray">
                Ближайшая марка бетона по прочности
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from(classToMarkMap).map(([concreteClass, concreteMark]) =>
              concreteMark ? (
                <TableRow>
                  <TableCell>{concreteClass}</TableCell>
                  <TableCell>{concreteMark}</TableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MarkFirstGroup;
