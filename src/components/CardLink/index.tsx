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
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const { palette } = useTheme();
  const iconColor = palette.text.primary;

  const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: palette.text.primary
  });

  return (
    <StyledLink to={link}>
      <Card
        variant="blue"
        sx={{
          p: 2
        }}
        {...other}
      >
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          textAlign="center"
        >
          {Icon && (
            <Icon
              sx={{
                width: '30px',
                height: '30px',
                color: iconColor
              }}
            />
          )}
          <Typography variant={isMobile ? 'body1' : 'h6'}>{name}</Typography>
        </Stack>
      </Card>
    </StyledLink>
  );
}
