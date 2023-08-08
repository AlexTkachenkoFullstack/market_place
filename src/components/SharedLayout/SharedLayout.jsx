import * as React from 'react';

import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <nav style={{backgroundColor:'pink'}}>
        <h2 >Header</h2>
        <NavLink to='/' style={{marginRight:10}}>Main</NavLink>
        <NavLink to='/registration'  style={{marginRight:10}}>Registration</NavLink>
        <NavLink to='/login'  style={{marginRight:10}}>Login</NavLink>

      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
