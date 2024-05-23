import { SvgIconProps } from '@mui/material';
// import IconC from '../icons/icon-c';
// import IconM from '../icons/icon-m';
import IconA from '../icons/icon-a';
import IconK from '../icons/icon-k';
// import IconD from '../icons/icon-d';
// import IconG from '../icons/icon-g';
// import IconConcretePlaceholder from '../icons/concrete-placeholder';
import IconM from '../icons/icon-m';

export interface MenuItem {
  name: string;
  link: string;
  Icon?: (props: SvgIconProps) => JSX.Element;
}

export const concreteListsMenuItems: MenuItem[] = [
  { name: 'Классы Бетона', link: '/class_list', Icon: IconK },
  { name: 'Марки Бетона', link: '/mark_list', Icon: IconM },
  { name: 'Классы Арматуры', link: '/reinforcement_list', Icon: IconA }
];

export const menuItems: MenuItem[] = [
  { name: 'Класс Бетона', link: '/class' },
  { name: 'Марка Бетона', link: '/mark' },
  { name: 'Подбор Арматуры', link: '/reinforcement' },
  { name: 'Коэф Условий Работы', link: '/service_factor' },
  { name: 'Предельные Прогибы', link: '/deflection_limits' }
];

export const calculationMenuItems: MenuItem[] = [
  {
    name: 'Проверка прочности изгибаемого элемента',
    link: '/concrete_bend_strength'
  },
  {
    name: 'Подбор арматуры изгибаемого элемента',
    link: '/concrete_bend_rebar_assortment'
  },
  {
    name: 'Расчет на действие поперечной силы',
    link: '/shear_force'
  },
  { name: 'Расчет на местное сжатие', link: '/local_compression' }
];
