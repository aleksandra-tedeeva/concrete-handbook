import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button, Typography } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { ConcreteMark } from '../../types/data/concrete_mark';
import ReturnButton from '../ReturnButton';

export interface IDetailedClassProps {
  data: ConcreteMark | undefined;
  returnToSearch: () => void;
  showFullResult: (type: 'class' | 'mark', name: string) => void;
}

const DetailedMark = ({ data, returnToSearch, showFullResult }: IDetailedClassProps) => {
  const { headers: availableClasses } = useAppSelector((state) => state.class);

  if (!data) {
    return (
      <>
        <ReturnButton label="Вернуться к поиску" returnFunction={returnToSearch} />
        <Typography>Нет данных по марке бетона.</Typography>
      </>
    );
  }
  return (
    <>
      <ReturnButton label="Вернуться к поиску" returnFunction={returnToSearch} />
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
                    onClick={() => showFullResult('class', data.corresponding_class)}
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
    </>
  );
};

export default DetailedMark;
