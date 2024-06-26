import { Routes, Route, Outlet } from 'react-router-dom';
import ConcreteClass from '../pages/1_ConcreteClass';
import ConcreteMark from '../pages/2_ConcreteMark';
import Reinforcement from '../pages/3_Reinforcement';
import ServiceFactor from '../pages/4_ServiceFactor';
import DeflectionLimits from '../pages/5_DeflectionLimits';
import Home from '../pages/Home';
import Error from '../pages/Error';
import AppBar from '../components/AppBar';
import ConcreteBendStrength from '../pages/Calculations/1_ConcreteBendStrength';
import ConcreteBendRebarAssortment from '../pages/Calculations/2_ConcreteBendRebarAssortment';
import ShearForce from '../pages/Calculations/8_ShearForce';
import LocalCompression from '../pages/Calculations/9_LocalCompression';
import { Box, CssBaseline, Stack } from '@mui/material';
import ConcreteClasses from '../pages/ConcreteClasses/ConcreteClasses';
import ConcreteMarks from '../pages/ConcreteMarks/ConcreteMarks';
import DetailedMark from '../components/DetailedMark';
import DetailedClass from '../components/DetailedClass';
import Reinforcements from '../pages/Reinforcements/Reinforcements';
import DetailedReinforcement from '../components/DetailedReinforcement/DetailedRainforcement';
import Footer from '../pages/Footer/footer';
import AboutPage from '../pages/About/about';

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Stack sx={{ height: '100%', boxSizing: 'border-box' }}>
            <CssBaseline />
            <AppBar />
            <Box
              sx={{
                flex: 1,
                height: '100%',
                boxSizing: 'border-box',
                overflow: 'auto'
              }}
            >
              <Outlet />
            </Box>
            <Footer />
          </Stack>
        }
      >
        <Route index element={<Home />} />

        {/* Класс Бетона */}
        <Route path="class" element={<ConcreteClass />} />
        <Route path="class_list" element={<ConcreteClasses />} />
        <Route path="class_list/:id" element={<DetailedClass />} />

        {/* Марка Бетона */}
        <Route path="mark" element={<ConcreteMark />} />
        <Route path="mark_list" element={<ConcreteMarks />} />
        <Route path="mark_list/:id" element={<DetailedMark />} />

        {/* Арматура */}
        <Route path="reinforcement" element={<Reinforcement />} />
        <Route path="reinforcement_list" element={<Reinforcements />} />
        <Route path="reinforcement_list/:id" element={<DetailedReinforcement />} />

        {/* Коэф Условий Работы */}
        <Route path="service_factor" element={<ServiceFactor />} />
        {/* Предельные Прогибы */}
        <Route path="deflection_limits" element={<DeflectionLimits />} />

        {/* Ссылки на Расчеты */}
        <Route path="concrete_bend_strength" element={<ConcreteBendStrength />} />
        <Route path="concrete_bend_rebar_assortment" element={<ConcreteBendRebarAssortment />} />
        <Route path="shear_force" element={<ShearForce />} />
        <Route path="local_compression" element={<LocalCompression />} />

        <Route element={<AboutPage />} path="/about" />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Router;
