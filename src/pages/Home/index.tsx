import { Grid, Stack, Typography } from '@mui/material';
import { calculationMenuItems, menuItems } from '../../constants/menu-items';
import CardLink from '../../components/CardLink';

const Home = () => {
  return (
    <Stack mt={2}>
      <Typography variant="h5" align="left">
        Справочная Информация
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <Grid item xs key={item.link}>
            <CardLink {...item} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" align="left" mt={1}>
        Расчеты
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {calculationMenuItems.map((item) => (
          <Grid item xs={3} key={item.link}>
            <CardLink {...item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Home;
