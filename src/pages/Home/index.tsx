import { Grid, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import {
  calculationMenuItems,
  concreteListsMenuItems,
  menuItems
} from '../../constants/menu-items';
import CardLink from '../../components/CardLink';

const Home = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const spacing = isMobile ? 1 : 2;

  return (
    <Stack spacing={spacing} mt={1}>
      <Stack>
        <Typography variant={isMobile ? 'h6' : 'h5'} align="left" mb={1}>
          Списки классов и марок бетона
        </Typography>
        <Grid container spacing={spacing}>
          {concreteListsMenuItems.map((item) => (
            <Grid item xs={isMobile ? 12 : 4} key={item.link}>
              <CardLink {...item} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Stack>
        <Typography variant={isMobile ? 'h6' : 'h5'} align="left" mb={1}>
          Справочная Информация
        </Typography>
        <Grid container spacing={spacing}>
          {menuItems.map((item) => (
            <Grid item xs={isMobile ? 12 : true} key={item.link}>
              <CardLink {...item} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Stack>
        <Typography variant={isMobile ? 'h6' : 'h5'} align="left" mb={1}>
          Расчеты
        </Typography>
        <Grid container spacing={spacing}>
          {calculationMenuItems.map((item) => (
            <Grid item xs={isMobile ? 12 : 3} key={item.link}>
              <CardLink {...item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Home;
