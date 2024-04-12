import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DeflectionLimitsVertical = () => {
  return (
    <TableContainer>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell className="highlight-cell--gray">Элементы конструкций</TableCell>
            <TableCell className="highlight-cell--gray">Предъявляемые требования</TableCell>
            <TableCell className="highlight-cell--gray">Вертикальные предельные прогибы</TableCell>
            <TableCell className="highlight-cell--gray">
              Нагрузки для определения вертикальных прогибов
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              1. Балки крановых путей под мостовые и подвесные краны, управляемые:
            </TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>с пола, в том числе тельферы (тали)</TableCell>
            <TableCell>Технологические</TableCell>
            <TableCell>l/250</TableCell>
            <TableCell rowSpan={5}>От одного крана</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>из кабины при группах режимов работы (по ГОСТ 25546):</TableCell>
            <TableCell rowSpan={4}>Физиологические и технологические</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1К - 6К</TableCell>

            <TableCell>l/400</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7К</TableCell>

            <TableCell>l/500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>8К</TableCell>

            <TableCell>l/600</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              2. Балки, фермы, ригели, прогоны, плиты, настилы (включая поперечные ребра плит и
              настилов):
            </TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>а) покрытий и перекрытий, открытых для обзора, при пролете l, м:</TableCell>
            <TableCell rowSpan={6}>Эстетико-психологические</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell rowSpan={6}>Постоянные и временные длительные</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{'l <= 1'}</TableCell>

            <TableCell>l/120</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>l = 3</TableCell>

            <TableCell>l/150</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>l = 6</TableCell>

            <TableCell>l/200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>l = 24 (12)</TableCell>

            <TableCell>l/250</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{'l >= 36 (24)'}</TableCell>

            <TableCell>l/300</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>б) покрытий и перекрытий при наличии перегородок под ними</TableCell>
            <TableCell rowSpan={2}>Конструктивные</TableCell>
            <TableCell>Принимаются в соответствии с приложением E.1</TableCell>
            <TableCell>
              Приводящие к уменьшению зазора между несущими элементами конструкций и перегородками,
              расположенными под элементами
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              в) покрытий и перекрытий при наличии на них элементов, подверженных растрескиванию
              (стяжек, полов, перегородок)
            </TableCell>

            <TableCell>l/150</TableCell>
            <TableCell>Действующие после выполнения перегородок, полов, стяжек</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              г) покрытий и перекрытий при наличии тельферов (талей), подвесных кранов, управляемых:
            </TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>с пола</TableCell>
            <TableCell>Технологические</TableCell>
            <TableCell>l/300 или a/150 (меньшее из двух)</TableCell>
            <TableCell>
              Временные с учетом нагрузки от одного крана или тельфера (тали) на одном пути
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>из кабины</TableCell>
            <TableCell>Физиологические</TableCell>
            <TableCell>l/400 или a/200 (меньшее из двух)</TableCell>
            <TableCell>От одного крана или тельфера (тали) на одном пути</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              д) перекрытий, подверженных действию: перемещаемых грузов, материалов, узлов и
              элементов оборудования и других подвижных нагрузок (в том числе при безрельсовом
              напольном транспорте)
            </TableCell>
            <TableCell>Физиологические и технологические</TableCell>
            <TableCell>l/350</TableCell>
            <TableCell>
              0,7 полных нормативных значений временных нагрузок или нагрузки от одного погрузчика
              (более неблагоприятное из двух)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>нагрузок от рельсового транспорта:</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>узкоколейного</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>l/400</TableCell>
            <TableCell rowSpan={2}>
              От одного состава вагонов (или одной напольной машины) на одном пути
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ширококолейного</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>l/500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3. Элементы лестниц (марши, площадки, косоуры), балконов, лоджий</TableCell>
            <TableCell>Эстетико-психологические</TableCell>
            <TableCell colSpan={2}>Те же, что в поз. 2.а</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Физиологические</TableCell>
            <TableCell colSpan={2}>Определяются в соответствии в с.п. Е.2.2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              4. Плиты перекрытий, лестничные марши и площадки, прогибу которых не препятствуют
              смежные элементы
            </TableCell>
            <TableCell>&#171;</TableCell>
            <TableCell>0,7 мм</TableCell>
            <TableCell>Сосредоточенная нагрузка 1 кН в середине пролета</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              5. Перемычки и навесные стеновые панели над оконными и дверными проемами (ригели и
              прогоны остекления)
            </TableCell>
            <TableCell>Конструктивные</TableCell>
            <TableCell>l/200</TableCell>
            <TableCell>
              Приводящие к уменьшению зазора между несущими элементами и оконным или дверным
              заполнением, расположенным под элементами
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Эстетико-психологические</TableCell>
            <TableCell>Те же, что в поз. 2.а</TableCell>
            <TableCell>Те же, что в поз. 2.а</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DeflectionLimitsVertical;
