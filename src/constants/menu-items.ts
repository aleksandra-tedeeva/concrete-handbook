export interface MenuItem {
  name: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { name: 'Класс Бетона', link: '/class' },
  { name: 'Марка Бетона', link: '/mark' },
  { name: 'Арматура', link: '/reinforcement' },
  { name: 'Коэф Условий Работы', link: '/service_factor' },
  { name: 'Предельные Прогибы', link: '/deflection_limits' }
];

export default menuItems;
