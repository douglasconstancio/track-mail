import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainer } from './style';

export function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <p>
        Created by
        {' '}
        <Link
          target="_blank"
          to="https://github.com/douglasconstancio"
          rel="noreferrer"
        >
          Douglas Constancio
        </Link>
      </p>
    </FooterContainer>
  );
}
