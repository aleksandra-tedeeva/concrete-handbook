import { Stack, Typography } from '@mui/material';
import Error404 from '../../icons/error-404';
import ReturnButton from '../../components/ReturnButton';

const Error = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      flex={1}
      spacing={1}
      height="100%"
    >
      <Error404 sx={{ width: '200px', height: '200px', color: 'black' }} />
      <Typography variant="h4">Ошибка 404</Typography>
      <Typography variant="body1">Такой страницы не существует...</Typography>
      <ReturnButton label="На главную" to="/" />
    </Stack>
  );
};

export default Error;
