import { Grid } from '@mui/material';
import CardLink from '../../components/CardLink';
import { menuItems } from '../../constants/menu-items';
import BorderedWrapper from './bordered-wrapper';
import useResponsiveSize from '../../hooks/useResponsiveSize';

export default function SectionTables() {
  const { xs, isMobile } = useResponsiveSize();

  return (
    <BorderedWrapper label="Справочная Информация">
      <Grid container spacing={isMobile ? 1 : 4}>
        {menuItems.map((item) => (
          <Grid item xs={xs} key={item.link}>
            <CardLink {...item} variant="white" />
          </Grid>
        ))}
      </Grid>
    </BorderedWrapper>
  );
}
