import React from 'react';

import { FaBell, FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { TopNavbarContainer, TopNavItems, BreadCrumb, IconsList } from './styles/menus';
import dvoraLogo from '../../assets/dvora-logo.png';

export default function TopNavbar() {
  return (
    <TopNavbarContainer background={"#00A7E1"}>
      <img src={dvoraLogo}/>
      <TopNavItems>
        <BreadCrumb>EJComp - <span> Perfil do Usuário</span></BreadCrumb>
        <IconsList>
          <FaUser/>
          <FaBell/>
          <GiHamburgerMenu/>
        </IconsList>
      </TopNavItems>
    </TopNavbarContainer>
  );
}
