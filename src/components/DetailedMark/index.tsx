import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button, Stack, Typography } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import ReturnButton from '../ReturnButton';
import { useParams, useNavigate } from 'react-router-dom';

const DetailedMark = () => {
  const { headers: availableClasses } = useAppSelector((state) => state.class);
  const { id } = useParams();
  const { data: allClasses } = useAppSelector((state) => state.mark);
  const data = allClasses.find((el) => el.name === id);

  const navigate = useNavigate();

  const returnToSearch = () => {
    navigate('/mark_list/');
  };

  const showFullResult = (name: string) => {
    navigate(`/class_list/${name}`);
  };

  if (!data) {
    return (
      <Stack spacing={1} pt={1} alignItems="flex-start">
        <ReturnButton label="Вернуться к списку марок бетона" returnFunction={returnToSearch} />
        <Typography>Нет данных по марке бетона.</Typography>
      </Stack>
    );
  }
  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton label="Вернуться к списку марок бетона" returnFunction={returnToSearch} />
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Общее
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Марка бетона</TableCell>
              <TableCell>
                <strong>{data.name}</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Соответствующий класс бетона</TableCell>
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
                Предельные состояния второй группы - кгс/см<sup>2</sup>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                Сжатие
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тяжелый</TableCell>
              <TableCell>{data.second_group.compression.heavy || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>На пористых заполнителях</TableCell>
              <TableCell>{data.second_group.compression.aerated || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый вида А</TableCell>
              <TableCell>{data.second_group.compression.cellular_a || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый вида Б</TableCell>
              <TableCell>{data.second_group.compression.cellular_b || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                Растяжение
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тяжелый</TableCell>
              <TableCell>{data.second_group.expansion.heavy || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>На пористых заполнителях при мелком плотном заполнителе</TableCell>
              <TableCell>{data.second_group.expansion.aerated_dense || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>На пористых заполнителях при мелком пористом заполнителе</TableCell>
              <TableCell>{data.second_group.expansion.aerated_porous || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый вида А</TableCell>
              <TableCell>{data.second_group.expansion.cellular_a || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый вида Б</TableCell>
              <TableCell>{data.second_group.expansion.cellular_b || '-'}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Предельные состояния первой группы - кгс/см<sup>2</sup>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                Сжатие
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тяжелый</TableCell>
              <TableCell>{data.first_group.compression.heavy || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>На пористых заполнителях</TableCell>
              <TableCell>{data.first_group.compression.aerated || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый вида А</TableCell>
              <TableCell>{data.first_group.compression.cellular_a || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый вида Б</TableCell>
              <TableCell>{data.first_group.compression.cellular_b || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Крупнопористый</TableCell>
              <TableCell>{data.first_group.compression.large_porous || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                Растяжение
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тяжелый</TableCell>
              <TableCell>{data.first_group.expansion.heavy || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>На пористых заполнителях при мелком плотном заполнителе</TableCell>
              <TableCell>{data.first_group.expansion.aerated_dense || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>На пористых заполнителях при мелком пористом заполнителе</TableCell>
              <TableCell>{data.first_group.expansion.aerated_porous || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый вида А</TableCell>
              <TableCell>{data.first_group.expansion.cellular_a || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ячеистый вида Б</TableCell>
              <TableCell>{data.first_group.expansion.cellular_b || '-'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default DetailedMark;
