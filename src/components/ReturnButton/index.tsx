import Button, { ButtonProps } from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';

interface IReturnButtonProps extends ButtonProps {
  label: string;
  to: string;
}

const ReturnButton = ({ label, to, ...other }: IReturnButtonProps) => {
  const navigate = useNavigate();

  const returnFunction = () => {
    navigate(to);
  };

  return (
    <Button {...other} onClick={returnFunction} startIcon={<ChevronLeftIcon />}>
      {label}
    </Button>
  );
};

export default ReturnButton;
