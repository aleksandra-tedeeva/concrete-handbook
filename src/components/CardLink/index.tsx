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
    <StyledLink to={link}>
      <Card
        variant="elevation"
        sx={{
          p: 2,
          '&:hover': {
            background: 'rgba(60, 83, 164,0.1)',
            transition: 'ease-in-out 0.3s'
          }
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          textAlign="left"
          sx={(theme) => ({
            textDecoration: 'none',
            color: theme.palette.secondary.main,
            height: '60px'
          })}
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
          <Typography variant="h6">{name}</Typography>
        </Stack>
      </Card>
    </StyledLink>
  );
}
