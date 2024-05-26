import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import RussianFlag from '../../icons/russian-flag';
import CustomDivider from '../Home/custom-divider';
import useIsMobile from '../../hooks/useIsMobile';

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <>
      <CustomDivider bottom="0px" top="-4px" />
      <Stack
        direction={isMobile ? 'column' : 'row'}
        alignItems="center"
        justifyContent="space-between"
        sx={(theme) => ({ background: theme.palette.primary.dark })}
        spacing={isMobile ? 0 : 2}
        px={2}
      >
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
          <Button
            component={Link}
            to="./sp_2018.pdf"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<RussianFlag />}
            sx={{
              color: 'white',
              opacity: 0.75,
              '&:hover': { opacity: 1 }
            }}
          >
            СП 63.13330.2018
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: 'white',
              opacity: 0.75,
              '&:hover': { opacity: 1 }
            }}
          >
            О ПРОЕКТЕ
          </Button>
        </Stack>

        <Button
          component={Link}
          to="https://tsuab.ru/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'white',
            opacity: 0.75,
            '&:hover': { opacity: 1 }
          }}
        >
          @2024 ТГАСУ
        </Button>
      </Stack>
    </>
  );
}
