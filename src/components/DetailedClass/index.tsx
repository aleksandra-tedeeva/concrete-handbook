import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button, Stack, Typography } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import ReturnButton from '../ReturnButton';
import { useNavigate, useParams } from 'react-router-dom';
import t from '../../util/transformTableValues';

const DetailedClass = () => {
  const { id } = useParams();
  const { data: allClasses } = useAppSelector((state) => state.class);
  const data = allClasses.find((el) => el.name === id);

  const navigate = useNavigate();

  const showFullResult = (name: string) => {
    navigate(`/mark_list/${name}`);
  };

  const { headers: availableMarks } = useAppSelector((state) => state.mark);

  if (!data) {
    return (
      <Stack spacing={1} pt={1} alignItems="flex-start">
        <ReturnButton label="Вернуться к списку классов бетона" to="/class_list" />
        <Typography>Нет данных по классу бетона.</Typography>
      </Stack>
    );
  }

  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton label="Вернуться к списку классов бетона" to="/class_list" />
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Общее
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; Класс бетона</TableCell>
              <TableCell>
                <strong>{data.name}</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; Соответствующая марка бетона</TableCell>
              <TableCell>
                {data.corresponding_mark ? (
                  <Button
                    disabled={!availableMarks.includes(data.corresponding_mark)}
                    sx={{ marginLeft: '-16px' }}
                    onClick={() => showFullResult(data.corresponding_mark)}
                  >
                    {data.corresponding_mark}
                  </Button>
                ) : (
                  '-'
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Предельные состояния второй группы (МПа)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Сжатие (R<sub>bn</sub> и R<sub>b,ser</sub>)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Тяжелый и мелкозернистый и напрягающий</TableCell>
              <TableCell>{t`${data.second_group.compression.heavy} МПа`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Легкий</TableCell>
              <TableCell>{t`${data.second_group.compression.light} МПа`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый</TableCell>
              <TableCell>{t`${data.second_group.compression.cellular} МПа`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Растяжение (R<sub>btn</sub> и R<sub>bt,ser</sub>)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Тяжелый и мелкозернистый и напрягающий</TableCell>
              <TableCell>{t`${data.second_group.expansion.heavy} МПа`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Легкий</TableCell>
              <TableCell>{t`${data.second_group.expansion.light} МПа`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый</TableCell>
              <TableCell>{t`${data.second_group.expansion.cellular} МПа`}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Предельные состояния первой группы (МПа)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Сжатие (R<sub>b</sub>)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Тяжелый и мелкозернистый и напрягающий</TableCell>
              <TableCell>{t`${data.first_group.compression.heavy} МПа`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Легкий</TableCell>
              <TableCell>{t`${data.first_group.compression.light} МПа`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый</TableCell>
              <TableCell>{t`${data.first_group.compression.cellular} МПа`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Растяжение (R<sub>bt</sub>)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Тяжелый и мелкозернистый и напрягающий</TableCell>
              <TableCell>{t`${data.first_group.expansion.heavy} МПа`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Легкий</TableCell>
              <TableCell>{t`${data.first_group.expansion.light} МПа`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Ячеистый</TableCell>
              <TableCell>{t`${data.first_group.expansion.cellular} МПа`}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--dark-gray font-weight-600">
                Модуль упругости (E<sub>b</sub> - МПа/1000)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="highlight-cell--gray font-weight-500">&nbsp; Тяжелый</TableCell>
              <TableCell sx={{ background: ' #eee' }}>
                {t`${data.resilience.heavy} МПа/1000`}{' '}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Мелкозернистый групп:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; А - естественного твердения</TableCell>
              <TableCell>{t`${data.resilience.light_grain.natural} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; Б - автоклавного твердения</TableCell>
              <TableCell>{t`${data.resilience.light_grain.autoclave} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Легкий и поризованый марки по средней плотности D:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 800</TableCell>
              <TableCell>{t`${data.resilience.light_aerated_by_density.d_800} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 1000</TableCell>
              <TableCell>{t`${data.resilience.light_aerated_by_density.d_1000} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 1200</TableCell>
              <TableCell>{t`${data.resilience.light_aerated_by_density.d_1200} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 1400</TableCell>
              <TableCell>{t`${data.resilience.light_aerated_by_density.d_1400} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 1600</TableCell>
              <TableCell>{t`${data.resilience.light_aerated_by_density.d_1600} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 1800</TableCell>
              <TableCell>{t`${data.resilience.light_aerated_by_density.d_1800} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 2000</TableCell>
              <TableCell>{t`${data.resilience.light_aerated_by_density.d_2000} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="highlight-cell--gray font-weight-500">
                &nbsp; Ячеистый автоклавного твердения марки по средней плотности D:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 500</TableCell>
              <TableCell>{t`${data.resilience.cellular_autoclave_by_density.d_500} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 600</TableCell>
              <TableCell>{t`${data.resilience.cellular_autoclave_by_density.d_600} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 700</TableCell>
              <TableCell>{t`${data.resilience.cellular_autoclave_by_density.d_700} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 800</TableCell>
              <TableCell>{t`${data.resilience.cellular_autoclave_by_density.d_800} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 900</TableCell>
              <TableCell>{t`${data.resilience.cellular_autoclave_by_density.d_900} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 1000</TableCell>
              <TableCell>{t`${data.resilience.cellular_autoclave_by_density.d_1000} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 1100</TableCell>
              <TableCell>{t`${data.resilience.cellular_autoclave_by_density.d_1100} МПа/1000`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>&nbsp; &nbsp; 1200</TableCell>
              <TableCell>{t`${data.resilience.cellular_autoclave_by_density.d_1200} МПа/1000`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default DetailedClass;
