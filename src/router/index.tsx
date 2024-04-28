import { Routes, Route, Outlet } from 'react-router-dom';
import ConcreteClass from '../pages/1_ConcreteClass';
import ConcreteMark from '../pages/2_ConcreteMark';
import Reinforcement from '../pages/3_Reinforcement';
import ServiceFactor from '../pages/4_ServiceFactor';
import DeflectionLimits from '../pages/5_DeflectionLimits';
import Home from '../pages/Home';
import Error from '../pages/Error';
import AppBar from '../components/AppBar';
import Container from '@mui/material/Container/Container';
import ConcreteBendStrength from '../pages/Calculations/1_ConcreteBendStrength';
import ConcreteBendRebarAssortment from '../pages/Calculations/2_ConcreteBendRebarAssortment';
import EccentricallyCompressedElement from '../pages/Calculations/3_EccentricallyCompressedElement copy 2';
import EccentricallyStretchedElement from '../pages/Calculations/4_EccentricallyStretchedElement';
import PushingColumnCenter from '../pages/Calculations/5_PushingColumnCenter';
import PushingColumnEdge from '../pages/Calculations/6_PushingColumnEdge copy';
import PushingColumnCorner from '../pages/Calculations/7_PushingColumnCorner';
import ShearForce from '../pages/Calculations/8_ShearForce';
import LocalCompression from '../pages/Calculations/9_LocalCompression';
import CrackingWidth from '../pages/Calculations/10_CrackingWidth';
import Deflection from '../pages/Calculations/11_Deflection';
import { CssBaseline } from '@mui/material';

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CssBaseline />
            <AppBar />
            <Container maxWidth={false}>
              <Outlet />
            </Container>
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="class" element={<ConcreteClass />} />
        <Route path="mark" element={<ConcreteMark />} />
        <Route path="reinforcement" element={<Reinforcement />} />
        <Route path="service_factor" element={<ServiceFactor />} />
        <Route path="deflection_limits" element={<DeflectionLimits />} />

        {/* Ссылки на Расчеты */}
        <Route path="concrete_bend_strength" element={<ConcreteBendStrength />} />
        <Route path="concrete_bend_rebar_assortment" element={<ConcreteBendRebarAssortment />} />
        <Route
          path="eccentrically_compressed_element"
          element={<EccentricallyCompressedElement />}
        />
        <Route path="eccentrically_stretched_element" element={<EccentricallyStretchedElement />} />
        <Route path="pushing_column_center" element={<PushingColumnCenter />} />
        <Route path="pushing_column_edge" element={<PushingColumnEdge />} />
        <Route path="pushing_column_corner" element={<PushingColumnCorner />} />
        <Route path="shear_force" element={<ShearForce />} />
        <Route path="local_compression" element={<LocalCompression />} />
        <Route path="cracking_width" element={<CrackingWidth />} />
        <Route path="deflection" element={<Deflection />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Router;
