import {
  Card,
  CardProps,
  Stack,
  SvgIconProps,
  Theme,
  Typography,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';

export interface CardLinkProps extends CardProps {
  name: string;
  link: string;
  Icon?: (props: SvgIconProps) => JSX.Element;
}

export default function CardLink({ name, link, Icon, ...other }: CardLinkProps) {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const { palette } = useTheme();
  const iconColor = palette.text.primary;

  const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: palette.text.primary
  });

  return (
    <StyledLink to={link} sx={{ width: '100%' }}>
      <Card
        variant="blue"
        sx={{
          width: '100%',
          py: 1,
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        {...other}
      >
        <Stack
          direction="column"
          spacing={0.5}
          alignItems="center"
          justifyContent="flex-start"
          textAlign="center"
          width="100%"
        >
          {Icon && !isMobile && (
            <Icon
              sx={{
                width: '30px',
                height: '30px',
                color: iconColor
              }}
            />
          )}
          <Typography variant={isMobile ? 'body1' : 'h6'} sx={{ width: '100%' }}>
            {name}
          </Typography>
        </Stack>
      </Card>
    </StyledLink>
  );
}
