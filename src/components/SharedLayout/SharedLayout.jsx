import * as React from 'react';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <nav>
        <h2 style={{backgroundColor:'pink'}}>Header</h2>
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
