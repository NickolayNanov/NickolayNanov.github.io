import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/' legacyBehavior>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }} aria-label="Home">
          <DiCssdeck size='3em'/> <Span>Nikolay's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects' legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech' legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about' legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/NickolayNanov' target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <AiFillGithub size='3em'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/nikolay-nanov-7b0003188/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <AiFillLinkedin size='3em'/>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/nickolaynn/' target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <AiFillInstagram size='3em'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
