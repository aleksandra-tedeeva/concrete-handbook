import {
  Card,
  CardContent,
  Stack,
  SvgIconProps,
  Theme,
  Typography,
  styled,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';

export interface CardLinkProps {
  name: string;
  link: string;
  Icon?: (props: SvgIconProps) => JSX.Element;
}

export default function CardLink({ name, link, Icon }: CardLinkProps) {
  const { palette } = useTheme();
  const iconColor = palette.secondary.main;

  const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: palette.secondary.main
  });

  return (
    <Card variant="elevation" sx={{ maxWidth: '200px', minWidth: '150px', p: 1 }}>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={(theme) => ({
          textDecoration: 'none',
          color: theme.palette.secondary.main,
          height: '120px'
        })}
      >
        <StyledLink to={link}>
          {Icon && (
            <Icon
              sx={{
                width: '40px',
                height: '40px',
                color: iconColor
              }}
            />
          )}
          <Typography variant="h6">{name}</Typography>
        </StyledLink>
      </Stack>
    </Card>
  );
}
