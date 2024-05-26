import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button, Stack, Typography } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import ReturnButton from '../ReturnButton';
import { useParams, useNavigate } from 'react-router-dom';
import t from '../../util/transformTableValues';

const DetailedMark = () => {
  const { headers: availableClasses } = useAppSelector((state) => state.class);
  const { id } = useParams();
  const { data: allClasses } = useAppSelector((state) => state.mark);
  const data = allClasses.find((el) => el.name === id);

  const navigate = useNavigate();

  const showFullResult = (name: string) => {
    navigate(`/class_list/${name}`);
  };

  if (!data) {
    return (
      <Stack spacing={1} pt={1} alignItems="flex-start">
        <ReturnButton label="Вернуться к списку марок бетона" to="/mark_list/" />
        <Typography>Нет данных по марке бетона.</Typography>
      </Stack>
    );
  }
  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton label="Вернуться к списку марок бетона" to="/mark_list/" />
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Общее
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; Марка бетона</TableCell>
              <TableCell>
                <strong>{data.name}</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; Соответствующий класс бетона</TableCell>
              <TableCell>
                {data.corresponding_class ? (
                  <Button
                    disabled={!availableClasses.includes(data.corresponding_class)}
                    sx={{ marginLeft: '-16px' }}
                    onClick={() => showFullResult(data.corresponding_class)}
                  >
                    {data.corresponding_class}
                  </Button>
                ) : (
                  '-'
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Предельные состояния второй группы (кгс/см<sup>2</sup>)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Сжатие (R<sub>np</sub> и R<sub>npll</sub>)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Тяжелый</TableCell>
              <TableCell>{t`${data.second_group.compression.heavy} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; На пористых заполнителях</TableCell>
              <TableCell>{t`${data.second_group.compression.aerated} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый вида А</TableCell>
              <TableCell>{t`${data.second_group.compression.cellular_a} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый вида Б</TableCell>
              <TableCell>{t`${data.second_group.compression.cellular_b} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Растяжение (R<sub>p</sub> и R<sub>pll</sub>)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Тяжелый</TableCell>
              <TableCell>{t`${data.second_group.expansion.heavy} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                &nbsp; &nbsp; На пористых заполнителях при мелком плотном заполнителе
              </TableCell>
              <TableCell>{t`${data.second_group.expansion.aerated_dense} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                &nbsp; &nbsp; На пористых заполнителях при мелком пористом заполнителе
              </TableCell>
              <TableCell>{t`${data.second_group.expansion.aerated_porous} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый вида А</TableCell>
              <TableCell>{t`${data.second_group.expansion.cellular_a} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый вида Б</TableCell>
              <TableCell>{t`${data.second_group.expansion.cellular_b} кгс/см2`}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Предельные состояния первой группы - кгс/см<sup>2</sup>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Сжатие (R<sub>np</sub>)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Тяжелый</TableCell>
              <TableCell>{t`${data.first_group.compression.heavy} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; На пористых заполнителях</TableCell>
              <TableCell>{t`${data.first_group.compression.aerated} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый вида А</TableCell>
              <TableCell>{t`${data.first_group.compression.cellular_a} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый вида Б</TableCell>
              <TableCell>{t`${data.first_group.compression.cellular_b} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Растяжение (R<sub>p</sub>)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Тяжелый</TableCell>
              <TableCell>{t`${data.first_group.expansion.heavy} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                &nbsp; &nbsp; На пористых заполнителях при мелком плотном заполнителе
              </TableCell>
              <TableCell>{t`${data.first_group.expansion.aerated_dense} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                &nbsp; &nbsp; На пористых заполнителях при мелком пористом заполнителе
              </TableCell>
              <TableCell>{t`${data.first_group.expansion.aerated_porous} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый вида А</TableCell>
              <TableCell>{t`${data.first_group.expansion.cellular_a} кгс/см2`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый вида Б</TableCell>
              <TableCell>{t`${data.first_group.expansion.cellular_b} кгс/см2`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default DetailedMark;
