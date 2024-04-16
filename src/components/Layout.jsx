import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0' }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
