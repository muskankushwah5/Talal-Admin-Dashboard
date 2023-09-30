import React from 'react';
import { Footer, Navbar } from '../Components';

const NoNavbarNoFooterLayout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default NoNavbarNoFooterLayout;
