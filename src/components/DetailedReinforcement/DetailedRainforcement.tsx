import { useParams } from 'react-router-dom';
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
import t from '../../util/transformTableValues';

export default function DetailedReinforcement() {
  const { id } = useParams();
  const { classes } = useAppSelector((state) => state.reinforcement);
  const data = classes.find((el) => el.class === id);

  if (!data) {
    return (
      <Stack spacing={1} pt={1} alignItems="flex-start">
        <ReturnButton label="Вернуться к списку классов арматуры" to="/reinforcement_list/" />
        <Typography>Нет данных по классу арматуры.</Typography>
      </Stack>
    );
  }

  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton label="Вернуться к списку классов арматуры" to="/reinforcement_list/" />
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Общее
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>&nbsp; Класс арматуры</TableCell>
              <TableCell>
                <strong>{data.class}</strong>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>&nbsp; Документ, регламентирующий качество арматуры</TableCell>
              <TableCell>
                {data.document.map((d) => (
                  <Typography variant="subtitle2">{d}</Typography>
                ))}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>&nbsp; Вид арматуры</TableCell>
              <TableCell>
                {data.appearance.map((a) => (
                  <Typography variant="subtitle2">{a}</Typography>
                ))}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>&nbsp; Диаметры арматуры в мм (Марка стали)</TableCell>
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
                &nbsp; Расчетное сопротивление арматуры:
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                &nbsp; &nbsp; Растяжению для предельного состояния первой группы{' '}
                <strong>
                  (R<sub>s</sub>)
                </strong>
              </TableCell>
              <TableCell>
                {t`${data.resistance.Rs} МПа`}{' '}
                {data.resistance.Rsc_short && (
                  <>
                    <br />
                    {t`(${data.resistance.Rsc_short} МПа расчетное)`}
                  </>
                )}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                &nbsp; &nbsp; Сжатию для предельного состояния первой группы{' '}
                <strong>
                  (R<sub>sc</sub>)
                </strong>
              </TableCell>
              <TableCell>{t`${data.resistance.Rsc} МПа`}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                &nbsp; &nbsp; Поперечной растяжению для предельного состояния первой группы{' '}
                <strong>
                  (R
                  <sub>sw</sub>)
                </strong>
              </TableCell>
              <TableCell>{t`${data.resistance.Rsw} МПа`}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                &nbsp; &nbsp; Растяжению для предельного состояния второй группы{' '}
                <strong>
                  (R<sub>s,ser</sub>)
                </strong>
              </TableCell>
              <TableCell>{t`${data.resistance.Rs_ser} МПа`}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Упругость арматуры:
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                &nbsp; &nbsp; Модуль упругости арматуры{' '}
                <strong>
                  (E<sub>s</sub>)
                </strong>
              </TableCell>
              <TableCell>{data.elasticity.Es}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
