import React from 'react';

import { FooterContainer } from './style';

export const Footer = (): JSX.Element => (
  <FooterContainer>
    <p>
      Created by
      {' '}
      <a
        target="_blank"
        href="https://www.linkedin.com/in/douglasconstancio/"
        rel="noreferrer"
      >
        Douglas Constancio
      </a>
      {' & '}
      <a
        target="_blank"
        href="https://www.linkedin.com/in/elaine-cristina-constancio-375011144/"
        rel="noreferrer"
      >
        Nane
      </a>
      {' '}
      🌟
    </p>
  </FooterContainer>
  );
