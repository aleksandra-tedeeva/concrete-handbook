import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import ReturnButton from '../ReturnButton';

export default function DetailedReinforcement() {
  const { id } = useParams();
  const { classes } = useAppSelector((state) => state.reinforcement);
  const data = classes.find((el) => el.class === id);

  const navigate = useNavigate();

  const returnToSearch = () => {
    navigate('/reinforcement_list/');
  };

  if (!data) {
    return (
      <Stack spacing={1} pt={1} alignItems="flex-start">
        <ReturnButton label="Вернуться к списку классов арматуры" returnFunction={returnToSearch} />
        <Typography>Нет данных по классу арматуры.</Typography>
      </Stack>
    );
  }

  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton label="Вернуться к списку классов арматуры" returnFunction={returnToSearch} />
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Общее
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Класс арматуры</TableCell>
              <TableCell>
                <strong>{data.class}</strong>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Документ, регламентирующий качество арматуры</TableCell>
              <TableCell>
                {data.document.map((d) => (
                  <Typography variant="subtitle2">{d}</Typography>
                ))}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Вид арматуры</TableCell>
              <TableCell>
                {data.appearance.map((a) => (
                  <Typography variant="subtitle2">{a}</Typography>
                ))}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Диаметры арматуры в мм (Марка стали)</TableCell>
              <TableCell>
                {data.diameters.map((d) => (
                  <Typography variant="subtitle2">
                    ⌀ {d.min} - {d.max}{' '}
                    {d.steel_grades.length ? `(${d.steel_grades.join(',')})` : null}
                  </Typography>
                ))}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Область применения арматуры класса {data.class}:
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                В конструкциях с ненапрягаемой арматурой:
              </TableCell>
            </TableRow>

            {data.application_area.non_stressed.map((area, index) => (
              <TableRow>
                <TableCell colSpan={2}>&nbsp; • &nbsp; {area}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                В конструкциях с напрягаемой арматурой:
              </TableCell>
            </TableRow>

            {data.application_area.stressed.map((area, index) => (
              <TableRow>
                <TableCell colSpan={2}>&nbsp; • &nbsp; {area}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Расчетные характеристики арматуры класса {data.class} (МПа):
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                Расчетное сопротивление арматуры:
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Растяжению для предельного состояния первой группы Rs</TableCell>
              <TableCell>{data.resistance.Rs}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Сжатию для предельного состояния первой группы Rsc</TableCell>
              <TableCell>{data.resistance.Rsc}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                Поперечной растяжению для предельного состояния первой группы Rsw
              </TableCell>
              <TableCell>{data.resistance.Rsw}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Растяжению для предельного состояния второй группы Rs,ser</TableCell>
              <TableCell>{data.resistance.Rs_ser}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                Упругость арматуры:
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Модуль упругости арматуры Es</TableCell>
              <TableCell>{data.elasticity.Es}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
