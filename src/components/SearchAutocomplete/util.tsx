import IconA from '../../icons/icon-a';
import IconC from '../../icons/icon-c';
import IconG from '../../icons/icon-g';

export const getIcon = (type: string) => {
  switch (type) {
    case 'mark':
      return <IconG sx={{ width: '16px', height: '16px' }} />;
    case 'class':
      return <IconC sx={{ width: '16px', height: '16px' }} />;
    case 'reinforcement':
      return <IconA sx={{ width: '16px', height: '16px' }} />;
    default:
      return '';
  }
};

export const getType = (type: string) => {
  switch (type) {
    case 'mark':
      return 'Марка Бетона';
    case 'class':
      return 'Класс Бетона';
    case 'reinforcement':
      return 'Класс Арматуры';
    default:
      return '';
  }
};
