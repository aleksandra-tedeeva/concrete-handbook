import { Grid, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { calculationMenuItems, menuItems } from '../../constants/menu-items';
import CardLink from '../../components/CardLink';
import SectionClasses from './section-classes';
import SectionTables from './section-tables';
import SectionCalculations from './section-calculations';
import CustomDivider from './custom-divider';

const Home = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const spacing = isMobile ? 1 : 2;

  return (
    <Stack sx={{ flex: 1, height: '100%' }}>
      <SectionClasses />
      <SectionTables />
      <SectionCalculations />

      <CustomDivider />
      <Stack
        sx={(theme) => ({
          background: theme.palette.primary.main,
          backgroundImage: `url("./assets/bp_pattern.png")`,
          backgroundSize: '15%',
          backgroundRepeat: 'repeat',
          flex: 1,
          height: '100%'
        })}
      >
        <Stack p={2}>
          <Typography variant={isMobile ? 'h6' : 'h5'} align="left" mb={1}>
            Справочная Информация
          </Typography>
          <Grid container spacing={spacing}>
            {menuItems.map((item) => (
              <Grid item xs={isMobile ? 12 : true} key={item.link}>
                <CardLink variant="white" {...item} />
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Stack p={2}>
          <Typography variant={isMobile ? 'h6' : 'h5'} align="left" mb={1}>
            Расчеты
          </Typography>
          <Grid container spacing={spacing}>
            {calculationMenuItems.map((item) => (
              <Grid item xs={isMobile ? 12 : 3} key={item.link}>
                <CardLink variant="white" {...item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
