import Button, { ButtonProps } from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface IReturnButtonProps extends ButtonProps {
  returnFunction: () => void;
  label: string;
}

const ReturnButton = ({ returnFunction, label, ...other }: IReturnButtonProps) => {
  return (
    <Button {...other} onClick={returnFunction}>
      <ChevronLeftIcon sx={{ marginRight: '8px' }}></ChevronLeftIcon>
      {label}
    </Button>
  );
};

export default ReturnButton;
