import { Grid } from '@mui/material';
import CardLink from '../../components/CardLink';
import { menuItems } from '../../constants/menu-items';
import useIsMobile from '../../hooks/useIsMobile';
import BorderedWrapper from './bordered-wrapper';

export default function SectionTables() {
  const isMobile = useIsMobile();

  return (
    <BorderedWrapper label="Справочная Информация">
      <Grid container spacing={isMobile ? 1 : 4}>
        {menuItems.map((item) => (
          <Grid item xs={isMobile ? 12 : 6} key={item.link} spacing={1}>
            <CardLink {...item} variant="white" />
          </Grid>
        ))}
      </Grid>
    </BorderedWrapper>
  );
}
