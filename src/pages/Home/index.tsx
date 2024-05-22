import { Box, Stack } from '@mui/material';
import SectionClasses from './section-classes';
import SectionTables from './section-tables';
import SectionCalculations from './section-calculations';
import CustomDivider from './custom-divider';
import useIsMobile from '../../hooks/useIsMobile';

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <Stack
      className="DEBUG"
      sx={{
        flex: 1,
        height: '100%',
        minHeight: '100%',
        boxSizing: 'border-box'
      }}
    >
      <SectionClasses />

      <CustomDivider />

      <Box
        sx={(theme) => ({
          boxSizing: 'border-box',
          background: theme.palette.primary.main,
          backgroundImage: `url("./assets/bg_pattern.png")`,
          backgroundSize: isMobile ? '50%' : '20%',
          backgroundRepeat: 'repeat',
          flex: 1,

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
