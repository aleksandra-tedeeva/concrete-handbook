import { Stack } from '@mui/material';
import ReinforcementSortament from '../../components/ReinforcementSortament';
import ReturnButton from '../../components/ReturnButton';
import { useNavigate } from 'react-router-dom';

const Reinforcement = () => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate('/');
  };

  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton label="Вернуться" returnFunction={returnToHome} />
      <ReinforcementSortament />
    </Stack>
  );
};

export default Reinforcement;
