import IconA from '../../icons/icon-a';
import IconK from '../../icons/icon-k';
import IconM from '../../icons/icon-m';

export const getIcon = (type: string) => {
  switch (type) {
    case 'mark':
      return <IconM sx={{ width: '20px', height: '20px' }} />;
    case 'class':
      return <IconK sx={{ width: '20px', height: '20px' }} />;
    case 'reinforcement':
      return <IconA sx={{ width: '20px', height: '20px' }} />;
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
