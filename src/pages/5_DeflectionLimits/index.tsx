import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '../../components/TabPanel';
import { useState } from 'react';
import DeflectionLimitsVertical from '../../components/DeflectionLimitsVertical';
import DeflectionLimitsHorizontal from '../../components/DeflectionLimitsHorizontal';
import DeflectionLimitsHorizontalWind from '../../components/DeflectionLimitsHorizontalWind';
import { Stack } from '@mui/material';
import ReturnButton from '../../components/ReturnButton';

const headings = [
  'Вертикальные прогибы',
  'Горизонтальные прогибы',
  'Горизонтальные прогибы от ветра'
];

const DeflectionLimits = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={1} pt={1} alignItems="flex-start">
      <ReturnButton to="/" />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable">
            {headings.map((heading, index) => (
              <Tab label={heading} value={index}></Tab>
            ))}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <DeflectionLimitsVertical />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DeflectionLimitsHorizontal />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DeflectionLimitsHorizontalWind />
        </TabPanel>
      </Box>
    </Stack>
  );
};

export default DeflectionLimits;
