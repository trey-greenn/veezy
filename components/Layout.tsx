import React from 'react';
// import Header from './Header';
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"))

const Layout = ({ children }: {children:any}) => (
  <>
  <div className=" sticky top-0">
    <Header />
    </div>
    {children}
  </>
);

export default Layout;