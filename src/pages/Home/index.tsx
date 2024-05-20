import { Box, Stack } from '@mui/material';
import SectionClasses from './section-classes';
import SectionTables from './section-tables';
import SectionCalculations from './section-calculations';
import CustomDivider from './custom-divider';
import useIsMobile from '../../hooks/useIsMobile';

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <Stack sx={{ flex: 1, height: '100%' }}>
      <SectionClasses />

      <CustomDivider />

      <Box
        sx={(theme) => ({
          background: theme.palette.primary.main,
          backgroundImage: `url("./assets/bg_pattern.png")`,
          backgroundSize: '15%',
          backgroundRepeat: 'repeat',
          flex: 1,
          height: '100%',
          marginTop: '16px',
          width: '100%'
        })}
      >
        <Stack
          direction={isMobile ? 'column' : 'row'}
          alignItems="flex-start"
          justifyContent="center"
          spacing={4}
          p={4}
        >
          <SectionTables />
          <SectionCalculations />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Home;
