import { Stack, Typography, Grid } from '@mui/material';
import CardLink from '../../components/CardLink';
import { concreteListsMenuItems } from '../../constants/menu-items';
import HomepageSplash from '../../icons/homepage-splash';
import useIsMobile from '../../hooks/useIsMobile';

export default function SectionClasses({ spacing = 0 }: { spacing?: number }) {
  const isMobile = useIsMobile();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={isMobile ? 2 : 8}
      width="100%"
    >
      {!isMobile && <HomepageSplash sx={{ width: '690px', height: '390px' }} />}
      <Stack
        alignItems="center"
        justifyContent="center"
        maxWidth={isMobile ? '100%' : '60%'}
        spacing={2}
      >
        <Stack spacing={2}>
          <Typography variant="h5">Lorem Ipsum</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit felis, convallis
            ut accumsan id, aliquam sed ante. Etiam non ultricies dui. Donec vitae felis magna. In
            rhoncus mauris justo, non consequat purus auctor consectetur. Donec dictum turpis et
            lacinia lobortis. Praesent auctor in ipsum ac pellentesque. In eu arcu mauris. Quisque
            vitae justo purus. Etiam id mauris nec purus feugiat rutrum ut id lorem. Pellentesque
            vulputate urna ipsum, eu tempor dolor gravida nec. Duis ut molestie turpis. Mauris
            rutrum faucibus imperdiet.
          </Typography>
        </Stack>

        <Stack
          direction={isMobile ? 'column' : 'row'}
          alignItems="center"
          justifyContent="space-between"
          width={isMobile ? '100%' : '80%'}
        >
          {concreteListsMenuItems.map((item) => (
            <CardLink {...item} sx={{ width: isMobile ? '100%' : '240px', p: 2 }} />
          ))}
        </Stack>

        {/* <Grid container spacing={spacing}>
          {concreteListsMenuItems.map((item) => (
            <Grid item xs={isMobile ? 12 : 4} key={item.link} spacing={1}>
              <CardLink {...item} sx={{ maxWidth: isMobile ? '100%' : '240px', p: 2 }} />
            </Grid>
          ))}
        </Grid> */}
      </Stack>
    </Stack>
  );
}
