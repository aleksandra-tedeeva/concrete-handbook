import { Grid, Stack, Typography } from '@mui/material';
import CardLink from '../../components/CardLink';
import { concreteListsMenuItems } from '../../constants/menu-items';
import HomepageSplash from '../../icons/homepage-splash';
import useIsMobile from '../../hooks/useIsMobile';

export default function SectionClasses() {
  const isMobile = useIsMobile();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={isMobile ? 2 : 8}
      width="100%"
      px={isMobile ? 1 : 6}
      pb={1}
    >
      {!isMobile && <HomepageSplash sx={{ width: '700px', height: '400px' }} />}
      <Stack
        alignItems="center"
        justifyContent="center"
        maxWidth={isMobile ? '100%' : '60%'}
        spacing={isMobile ? 2 : 4}
      >
        <Stack spacing={isMobile ? 2 : 4}>
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

        {/* <Stack
          direction={isMobile ? 'column' : 'row'}
          alignItems={isMobile ? 'flex-start' : 'center'}
          justifyContent={isMobile ? 'flex-start' : 'space-between'}
          width={isMobile ? '100%' : '80%'}
          spacing={isMobile ? 1 : 4}
          flexWrap="wrap"
        >
          {concreteListsMenuItems.map((item) => (
            <CardLink {...item} sx={{ width: isMobile ? '100%' : '140px', py: 2, px: 10 }} />
          ))}
        </Stack> */}

        <Grid container spacing={1}>
          {concreteListsMenuItems.map((item) => (
            <Grid item xs key={item.link} spacing={1}>
              <CardLink {...item} sx={{ width: '100%', py: 2, px: 10 }} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
