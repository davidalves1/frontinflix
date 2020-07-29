import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';
import LogoImg from '../../assets/logo.png';

const MenuNav = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

const Logo = styled.img.attrs({
  src: LogoImg,
})`
  max-width: 168px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export default function Menu() {
  return (
    <header>
      <MenuNav>
        <Link to="/">
          <Logo alt="AwesomeFlix Logo" />
        </Link>

        <Button as={Link} to="/video/novo">
          Novo vídeo
        </Button>
      </MenuNav>
    </header>

  );
}
