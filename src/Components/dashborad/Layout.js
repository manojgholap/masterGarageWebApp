import React from 'react';
import Routes from './Routes';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
       <div style={{display:"flex"}}>
          <Sidebar/>
          <Routes/>
       </div>
    )
};

export default Layout;
