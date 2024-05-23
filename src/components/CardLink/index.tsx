import {
  Card,
  CardActionArea,
  CardProps,
  Stack,
  SvgIconProps,
  Typography,
  styled,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import useIsMobile from '../../hooks/useIsMobile';

export interface CardLinkProps extends CardProps {
  name: string;
  link: string;
  Icon?: (props: SvgIconProps) => JSX.Element;
}

export default function CardLink({ name, link, Icon, ...other }: CardLinkProps) {
  const isMobile = useIsMobile();

  const { palette } = useTheme();
  const iconColor = palette.text.primary;

  const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: palette.text.primary
  });

  return (
    <StyledLink to={link} sx={{ width: '100%' }}>
      <CardActionArea>
        <Card
          variant="blue"
          sx={{
            width: '100%',
            py: 1,
            minHeight: '100px',
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
            width="80%"
            marginLeft="auto"
            marginRight="auto"
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
      </CardActionArea>
    </StyledLink>
  );
}
