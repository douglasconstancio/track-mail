import React from 'react';

import { FooterContainer } from './style';

export function Footer(): JSX.Element {
  return (
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
        {' '}
        🌟
      </p>
    </FooterContainer>
  );
}
