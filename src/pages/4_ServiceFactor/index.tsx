import { Stack } from '@mui/material';
import ServiceFactorCoefficients from '../../components/ServiceFactorCoefficients';
import ReturnButton from '../../components/ReturnButton';

const ServiceFactor = () => {
  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton label="Вернуться на главную страницу" to="/" />
      <ServiceFactorCoefficients />
    </Stack>
  );
};

export default ServiceFactor;
