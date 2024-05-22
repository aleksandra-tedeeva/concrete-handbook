import { Stack } from '@mui/material';
import ReinforcementSortament from '../../components/ReinforcementSortament';
import ReturnButton from '../../components/ReturnButton';

const Reinforcement = () => {
  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton label="Вернуться на главную страницу" to="/" />
      <ReinforcementSortament />
    </Stack>
  );
};

export default Reinforcement;
