import { Routes, Route } from 'react-router-dom';

import { StationList } from '../pages/StationList';
import { StationRegister } from '../pages/StationRegister';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { ParameterRegister } from '../pages/ParameterRegister';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/stationlist" element={<StationList />} />
      <Route path="/stationregister" element={<StationRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/parameterregister" element={<ParameterRegister />} />
    </Routes>
  );
}