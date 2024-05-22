import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '../../components/TabPanel';
import { useState } from 'react';
import MarkSecondGroup from '../../components/MarkSecondGroup';
import MarkToClass from '../../components/MarkToClass';
import MarkFirstGroup from '../../components/MarkFirstGroup';
import { Stack } from '@mui/material';
import ReturnButton from '../../components/ReturnButton';

const headings = [
  'Предельные Состояния Второй Группы',
  'Предельные Состояния Первой Группы',
  'Соотношения между марками и классами бетона'
];

const ConcreteMark = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton label="Вернуться" to="/" />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable">
            {headings.map((heading, index) => (
              <Tab label={heading} value={index}></Tab>
            ))}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MarkSecondGroup />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MarkFirstGroup />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MarkToClass />
        </TabPanel>
      </Box>
    </Stack>
  );
};

export default ConcreteMark;
