import { Routes, Route, Outlet } from "react-router-dom";
import ConcreteClass from "../pages/1_ConcreteClass";
import ConcreteMark from "../pages/2_ConcreteMark";
import Reinforcement from "../pages/3_Reinforcement";
import ServiceFactor from "../pages/4_ServiceFactor";
import DeflectionLimits from "../pages/5_DeflectionLimits";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AppBar from "../components/AppBar";
import Container from "@mui/material/Container/Container";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
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

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Router;
