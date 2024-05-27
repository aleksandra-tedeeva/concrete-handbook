import { Box, Grid, Link as MuiLink, List, ListItemText, Stack, Typography } from '@mui/material';
import CardLink from '../../components/CardLink';
import { concreteListsMenuItems } from '../../constants/menu-items';
import useIsMobile from '../../hooks/useIsMobile';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

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
        <Box maxWidth="800px">
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
        <Stack spacing={0}>
          <Typography variant="h5">Справочник и расчет железобетонных конструкций</Typography>
          <Typography variant="subtitle1">
            Приложение СЖБК предназначено, в первую очередь, для предоставления справочной
            информации* по классам/маркам бетона и классам арматуры в удобном формате для любых
            устройств (в т.ч. и мобильных).
            <br />В качестве дополнительного функционала приложение может произовдить расчеты*:
          </Typography>
          <List disablePadding dense>
            <ListItemText inset>• &nbsp; Прочности изгибаемого элемента</ListItemText>
            <ListItemText inset>• &nbsp; Арматуры изгибаемого элемента</ListItemText>
            <ListItemText inset>• &nbsp; На действие поперечной силы</ListItemText>
            <ListItemText inset>• &nbsp; На местное сжатие</ListItemText>
          </List>
          <Typography variant="caption">
            * согласно требованиям нормативного документа{' '}
            <MuiLink
              component={Link}
              to="./sp_2018.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              СП 63.13330.2018
            </MuiLink>
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
