import { SvgIconProps } from '@mui/material';
import IconC from '../icons/icon-c';
// import IconM from '../icons/icon-m';
import IconA from '../icons/icon-a';
import IconK from '../icons/icon-k';
import IconD from '../icons/icon-d';
import IconG from '../icons/icon-g';
import IconConcretePlaceholder from '../icons/concrete-placeholder';

export interface MenuItem {
  name: string;
  link: string;
  Icon?: (props: SvgIconProps) => JSX.Element;
}

export const concreteListsMenuItems: MenuItem[] = [
  { name: 'Список Классов Бетона', link: '/class_list', Icon: IconConcretePlaceholder },
  { name: 'Список Марок Бетона', link: '/mark_list', Icon: IconConcretePlaceholder },
  { name: 'Список Классов Арматуры', link: '/reinforcement_list', Icon: IconConcretePlaceholder }
];

export const menuItems: MenuItem[] = [
  { name: 'Класс Бетона', link: '/class', Icon: IconC },
  { name: 'Марка Бетона', link: '/mark', Icon: IconG },
  { name: 'Подбор Арматуры', link: '/reinforcement', Icon: IconA },
  { name: 'Коэф Условий Работы', link: '/service_factor', Icon: IconK },
  { name: 'Предельные Прогибы', link: '/deflection_limits', Icon: IconD }
];

export const calculationMenuItems: MenuItem[] = [
  {
    name: 'Проверка прочности изгибаемого элемента',
    link: '/concrete_bend_strength',
    Icon: IconConcretePlaceholder
  },
  {
    name: 'Подбор арматуры изгибаемого элемента',
    link: '/concrete_bend_rebar_assortment',
    Icon: IconConcretePlaceholder
  },
  {
    name: 'Проверка прочности внецентренно сжатого элемента',
    link: '/eccentrically_compressed_element',
    Icon: IconConcretePlaceholder
  },
  {
    name: 'Проверка прочности внецентренно растянутого элемента',
    link: '/eccentrically_stretched_element',
    Icon: IconConcretePlaceholder
  },
  {
    name: 'Продавливание - колонна посередине плиты',
    link: '/pushing_column_center',
    Icon: IconConcretePlaceholder
  },
  {
    name: 'Продавливание - колонна на краю',
    link: '/pushing_column_edge',
    Icon: IconConcretePlaceholder
  },
  {
    name: 'Продавливание - колонна на углу',
    link: '/pushing_column_corner',
    Icon: IconConcretePlaceholder
  },
  {
    name: 'Расчет на действие поперечной силы',
    link: '/shear_force',
    Icon: IconConcretePlaceholder
  },
  { name: 'Расчет на местное сжатие', link: '/local_compression', Icon: IconConcretePlaceholder },
  {
    name: 'Проверка на образование трещин и ширины их раскрытия',
    link: '/cracking_width',
    Icon: IconConcretePlaceholder
  },
  {
    name: 'Определение прогиба железобетонного элемента',
    link: '/deflection',
    Icon: IconConcretePlaceholder
  }
];
