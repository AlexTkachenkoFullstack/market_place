import React from 'react';
import { Route,Routes,Navigate } from 'react-router-dom';
import { lazy } from "react";
import SharedLayout from '../SharedLayout/SharedLayout';
const Home = lazy(() => import("..//..//pages/Home/Home"));
const Registration = lazy(() => import("..//..//pages/Registration/Registration"));
const Login = lazy(() => import("..//..//pages/Login/Login"));

function App() {
  
  return (
    <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/registration" element={<Registration />}/>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
  )
}

export default App
