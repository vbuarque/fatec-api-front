import { Routes, Route } from 'react-router-dom';

import { StationList } from '../pages/StationList';
import { StationRegister } from '../pages/StationRegister';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { ParameterRegister } from '../pages/ParameterRegister';
import Home from '../pages/Home';
import { ParameterList } from '../pages/ParameterList';
import { Presentation } from '../pages/Presentation';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Presentation />} />
      <Route path="/stationlist" element={<StationList />} />
      <Route path="/stationregister" element={<StationRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/parameterregister" element={<ParameterRegister />} />
      <Route path="/parameterlist" element={<ParameterList />} />
    </Routes>
  );
}