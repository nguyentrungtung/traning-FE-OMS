import React from 'react';
import TopbarComponent from './parts/Topbar';
import NavbarComponent from './parts/Navbar';
import "./_header.scss";


const Header = ()=> {
  return (
    <header className="header">
        <TopbarComponent/>
        <NavbarComponent/>
    </header>
  );
}

export default Header;
