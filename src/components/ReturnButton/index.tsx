import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface IReturnButtonProps {
  returnFunction: () => void;
  label: string;
}

const ReturnButton = ({ returnFunction, label }: IReturnButtonProps) => {
  return (
    <Button onClick={returnFunction} sx={{ marginBottom: '16px' }}>
      <ChevronLeftIcon sx={{ marginRight: '8px' }}></ChevronLeftIcon>
      {label}
    </Button>
  );
};

export default ReturnButton;
