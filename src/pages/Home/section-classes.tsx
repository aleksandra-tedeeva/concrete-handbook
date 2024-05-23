import { Box, Grid, Stack, Typography } from '@mui/material';
import CardLink from '../../components/CardLink';
import { concreteListsMenuItems } from '../../constants/menu-items';
import useIsMobile from '../../hooks/useIsMobile';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
      {!isMobile && (
        <Box>
          <LazyLoadImage
            effect="blur"
            src="./assets/splash.png"
            alt="Справочник жбк"
            width="100%"
            height="auto"
          />
        </Box>
      )}
      <Stack
        alignItems="center"
        justifyContent="center"
        maxWidth={isMobile ? '100%' : '54%'}
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

        <Stack maxWidth="600px" alignItems="center" justifyContent="center">
          <Grid container spacing={isMobile ? 1 : 2} sx={{ width: '100%' }}>
            {concreteListsMenuItems.map((item) => (
              <Grid item xs={isMobile ? 12 : 4} key={item.link}>
                <CardLink {...item} sx={{ width: '100%', px: 4, py: 2 }} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /* <Stack
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
        </Stack> */
}
