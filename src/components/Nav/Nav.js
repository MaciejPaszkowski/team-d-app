import React, { useState } from 'react';
import NavList from './NavList';
import NavIcon from './NavIcon';
import Logo from './Logo';
import cross from './assets/menu-o.svg';
import hamburger from './assets/menu-c.svg';
import './style.css';

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="nav">
      <Logo />
      <NavIcon icon={isActive ? cross : hamburger} onClick={handleClick} />
      <NavList openMenu={isActive ? 'navListActive' : ''} />
    </nav>
  );
}

export default Nav;
