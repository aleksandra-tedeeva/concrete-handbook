import { Stack } from '@mui/material';
import ServiceFactorCoefficients from '../../components/ServiceFactorCoefficients';
import ReturnButton from '../../components/ReturnButton';
import { useNavigate } from 'react-router-dom';

const ServiceFactor = () => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate('/');
  };

  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton label="Вернуться" returnFunction={returnToHome} />
      <ServiceFactorCoefficients />
    </Stack>
  );
};

export default ServiceFactor;
