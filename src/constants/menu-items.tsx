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

export const menuItems: MenuItem[] = [
  { name: 'Класс Бетона', link: '/class', Icon: IconC },
  { name: 'Марка Бетона', link: '/mark', Icon: IconG },
  { name: 'Арматура', link: '/reinforcement', Icon: IconA },
  { name: 'Коэф Условий Работы', link: '/service_factor', Icon: IconK },
  { name: 'Предельные Прогибы', link: '/deflection_limits', Icon: IconD }
];

export const calculationMenuItems: MenuItem[] = [
  { name: 'Проверка прочности изгибаемого жбэ', link: '/calc1', Icon: IconConcretePlaceholder }
];
