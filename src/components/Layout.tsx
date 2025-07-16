import React, { FC, ReactNode } from 'react';
import '../styles/global.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <main className="container">
        {children}
      </main>
    </div>
  );
};

export default Layout;
