import { Info } from '@mui/icons-material';
import { Card, CardContent, Stack, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export interface CardLinkProps {
  name: string;
  link: string;
}

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit'
});

export default function CardLink({ name, link }: CardLinkProps) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={(theme) => ({
            textDecoration: 'none',
            color: theme.palette.secondary.main,
            height: '100px'
          })}
        >
          <StyledLink to={link}>
            <Info sx={{ width: 40, height: 40 }} />
            <Typography variant="h6">{name}</Typography>
          </StyledLink>
        </Stack>
      </CardContent>
    </Card>
  );
}
