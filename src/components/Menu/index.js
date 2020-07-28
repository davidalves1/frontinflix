import React from 'react';
import Button from './Button';
import Logo from '../../assets/logo.png';
import './Menu.css';

export default function Menu() {
  return (
    <header>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="AwesomeFlix Logo" />
        </a>

        <Button href="/">Novo vídeo</Button>
      </nav>
    </header>
  );
}
