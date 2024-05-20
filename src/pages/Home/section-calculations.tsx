import { Grid } from '@mui/material';
import CardLink from '../../components/CardLink';
import { calculationMenuItems } from '../../constants/menu-items';
import BorderedWrapper from './bordered-wrapper';
import useIsMobile from '../../hooks/useIsMobile';

export default function SectionCalculations() {
  const isMobile = useIsMobile();

  return (
    <BorderedWrapper label="Расчеты">
      <Grid container spacing={isMobile ? 1 : 4}>
        {calculationMenuItems.map((item) => (
          <Grid item xs={isMobile ? 12 : 6} key={item.link}>
            <CardLink variant="white" {...item} />
          </Grid>
        ))}
      </Grid>
    </BorderedWrapper>
  );
}
