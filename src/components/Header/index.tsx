import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import Logo from '../../img/logo.svg';
import { useRoutes } from '../../services/useRoutes';
import { Navigation } from '../Navigation/index';
import {
  HeaderContainer,
  HeaderContent,
  HomeContainer,
  HomeImage,
  MoonDark,
  SunLight,
  ToggleTheme,
} from './style';

export const Header = (): JSX.Element => {
  const { theme: { title }, toggleTheme } = useTheme();
  return (
    <HeaderContainer>
      <HeaderContent>
        <HomeContainer>
          <HomeImage src={Logo} alt="Logo" onClick={() => useRoutes('/')} />
        </HomeContainer>
        <nav>
          <ToggleTheme onClick={() => toggleTheme()}>
            {title === 'light' ? (
              <MoonDark size={22} />
            ) : (
              <SunLight size={22} />
            )}
          </ToggleTheme>
          <Navigation />
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
