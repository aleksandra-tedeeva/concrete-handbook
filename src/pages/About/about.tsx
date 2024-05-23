import { Stack, Typography } from '@mui/material';
import ReturnButton from '../../components/ReturnButton';

export default function AboutPage() {
  return (
    <Stack p={2} spacing={1} alignItems="flex-start" maxWidth="800px">
      <ReturnButton label="На главную страницу" to="/" />
      <Typography variant="h6">О проекте</Typography>

      <Typography color="error">
        Проект выполнен в качестве дипломной работы студентами ТГАСУ.
      </Typography>
      <Typography>
        Проект представляет собой веб-приложение для предоставления справочной информации по
        железобетонным конструкциям и некоторых расчетов железобетонных конструкций в соответствии
        со сводом правил СП 63.13330.2018.
      </Typography>

      <Stack>
        <Typography variant="body2" color="text.secondary">
          Авторы проекта не несут ответственность за возможные ошибки в шаблонах и результатах
          расчетов, а так же корректность их применения в конкретных ситуациях.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Решение о применимости расчетов пользователь приложения принимает под свою
          ответственность.
        </Typography>
      </Stack>
    </Stack>
  );
}
