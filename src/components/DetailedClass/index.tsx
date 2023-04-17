import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { ConcreteClass } from "../../types/data/concrete_class";
import { Button, Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import ReturnButton from "../ReturnButton";

export interface IDetailedClassProps {
  data: ConcreteClass | undefined;
  returnToSearch: () => void;
  showFullResult: (type: "class" | "mark", name: string) => void;
}

const DetailedClass = ({
  data,
  returnToSearch,
  showFullResult,
}: IDetailedClassProps) => {
  const { headers: availableMarks } = useAppSelector((state) => state.mark);

  if (!data) {
    return (
      <>
        <ReturnButton
          label="Вернуться к поиску"
          returnFunction={returnToSearch}
        />
        <Typography>Нет данных по классу бетона.</Typography>
      </>
    );
  }

  return (
    <>
      <ReturnButton
        label="Вернуться к поиску"
        returnFunction={returnToSearch}
      />
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray">
                Общее
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Класс бетона</TableCell>
              <TableCell>
                <strong>{data.name}</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Соответствующая марка бетона</TableCell>
              <TableCell>
                {data.corresponding_mark ? (
                  <Button
                    disabled={!availableMarks.includes(data.corresponding_mark)}
                    sx={{ marginLeft: "-16px" }}
                    onClick={() =>
                      showFullResult("mark", data.corresponding_mark)
                    }
                  >
                    {data.corresponding_mark}
                  </Button>
                ) : (
                  "-"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray">
                Предельные состояния второй группы (Сжатие) - МПа
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тяжелый и мелкозернистый и напрягающий</TableCell>
              <TableCell>
                {data.second_group.compression.heavy || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Легкий</TableCell>
              <TableCell>
                {data.second_group.compression.light || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый</TableCell>
              <TableCell>
                {data.second_group.compression.cellular || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray">
                Предельные состояния второй группы (Растяжение) - МПа
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тяжелый и мелкозернистый и напрягающий</TableCell>
              <TableCell>{data.second_group.expansion.heavy || "-"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Легкий</TableCell>
              <TableCell>{data.second_group.expansion.light || "-"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый</TableCell>
              <TableCell>
                {data.second_group.expansion.cellular || "-"}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray">
                Предельные состояния первой группы (Сжатие) - МПа
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тяжелый и мелкозернистый и напрягающий</TableCell>
              <TableCell>{data.first_group.compression.heavy || "-"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Легкий</TableCell>
              <TableCell>{data.first_group.compression.light || "-"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый</TableCell>
              <TableCell>
                {data.first_group.compression.cellular || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray">
                Предельные состояния первой группы (Растяжение) - МПа
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тяжелый и мелкозернистый и напрягающий</TableCell>
              <TableCell>{data.first_group.expansion.heavy || "-"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Легкий</TableCell>
              <TableCell>{data.first_group.expansion.light || "-"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый</TableCell>
              <TableCell>
                {data.first_group.expansion.cellular || "-"}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray">
                Модуль упругости - МПа/1000
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тяжелый</TableCell>
              <TableCell>{data.resilience.heavy || "-"} </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray">
                Модуль упругости - мелкозернистый групп:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>А - естественного твердения</TableCell>
              <TableCell>
                {data.resilience.light_grain.natural || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Б - автоклавного твердения</TableCell>
              <TableCell>
                {data.resilience.light_grain.autoclave || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray">
                Модуль упругости - легкий и поризованый марки по средней
                плотности D:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>800</TableCell>
              <TableCell>
                {data.resilience.light_aerated_by_density.d_800 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1000</TableCell>
              <TableCell>
                {data.resilience.light_aerated_by_density.d_1000 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1200</TableCell>
              <TableCell>
                {data.resilience.light_aerated_by_density.d_1200 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1400</TableCell>
              <TableCell>
                {data.resilience.light_aerated_by_density.d_1400 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1600</TableCell>
              <TableCell>
                {data.resilience.light_aerated_by_density.d_1600 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1800</TableCell>
              <TableCell>
                {data.resilience.light_aerated_by_density.d_1800 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2000</TableCell>
              <TableCell>
                {data.resilience.light_aerated_by_density.d_2000 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray">
                Модуль упругости - ячеистый автоклавного твердения марки по
                средней плотности D:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>500</TableCell>
              <TableCell>
                {data.resilience.cellular_autoclave_by_density.d_500 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>600</TableCell>
              <TableCell>
                {data.resilience.cellular_autoclave_by_density.d_600 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>700</TableCell>
              <TableCell>
                {data.resilience.cellular_autoclave_by_density.d_700 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>800</TableCell>
              <TableCell>
                {data.resilience.cellular_autoclave_by_density.d_800 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>900</TableCell>
              <TableCell>
                {data.resilience.cellular_autoclave_by_density.d_900 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1000</TableCell>
              <TableCell>
                {data.resilience.cellular_autoclave_by_density.d_1000 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1100</TableCell>
              <TableCell>
                {data.resilience.cellular_autoclave_by_density.d_1100 || "-"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1200</TableCell>
              <TableCell>
                {data.resilience.cellular_autoclave_by_density.d_1200 || "-"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DetailedClass;
