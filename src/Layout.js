import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from './Nav';
import {Link} from 'react-router-dom';

const Layout = () => {
  return(
    <>
      <div className=''><Nav /></div>
      
    
      <Outlet />
    </>
  );
};

export default Layout;