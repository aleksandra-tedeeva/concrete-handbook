import { Grid, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import {
  calculationMenuItems,
  concreteListsMenuItems,
  menuItems
} from '../../constants/menu-items';
import CardLink from '../../components/CardLink';

const Home = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Stack mt={2}>
      <Typography variant={isMobile ? 'h6' : 'h5'} align="left">
        Списки классов и марок бетона
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {concreteListsMenuItems.map((item) => (
          <Grid item xs={isMobile ? 12 : 4} key={item.link}>
            <CardLink {...item} />
          </Grid>
        ))}
      </Grid>

      <Typography variant={isMobile ? 'h6' : 'h5'} align="left" mt={1}>
        Справочная Информация
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <Grid item xs={isMobile ? 12 : true} key={item.link}>
            <CardLink {...item} />
          </Grid>
        ))}
      </Grid>

      <Typography variant={isMobile ? 'h6' : 'h5'} align="left" mt={1}>
        Расчеты
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {calculationMenuItems.map((item) => (
          <Grid item xs={isMobile ? 12 : 4} key={item.link}>
            <CardLink {...item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Home;
