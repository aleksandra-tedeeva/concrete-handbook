import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabPanel from "../../components/TabPanel";
import ClassSecondGroup from "../../components/ClassSecondGroup";
import { useState } from "react";
import ClassFirstGroup from "../../components/ClassFirstGroup";
import ClassResilience from "../../components/ClassResilience";
import ClassProtectiveLayer from "../../components/ClassProtectiveLayer";

const headings = [
  "Предельные Состояния Второй Группы",
  "Предельные Состояния Первой Группы",
  "Модуль Упругости",
  "Защитный Слой",
];

const ConcreteClass = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable">
          {headings.map((heading, index) => (
            <Tab label={heading} value={index}></Tab>
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ClassSecondGroup />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ClassFirstGroup />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ClassResilience />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ClassProtectiveLayer />
      </TabPanel>
    </Box>
  );
};

export default ConcreteClass;
