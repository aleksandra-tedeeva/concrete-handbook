import { useNavigate } from 'react-router-dom';
import SearchListItem from '../../components/SearchAutocomplete/SearchListItem';
import { useAppSelector } from '../../store/hooks';
import { Container, Stack, Typography } from '@mui/material';
import ReturnButton from '../../components/ReturnButton';

export default function ConcreteMarks() {
  const { headers } = useAppSelector((state) => state.mark);

  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/mark_list/${name}`);
  };

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <>
      <Container>
        <Stack spacing={1}>
          <Stack alignItems="flex-start" mt={1}>
            <ReturnButton label="На главную" returnFunction={handleReturn} />
            <Typography variant="h5" sx={{ ml: '38px' }}>
              Список марок бетона
            </Typography>
          </Stack>
          <Stack>
            {headers.map((header) => (
              <SearchListItem
                option={{ label: header, type: 'mark' }}
                onClick={() => handleClick(header)}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
