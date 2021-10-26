import React from 'react';

import {
  Container,
  LoaderContainer,
  Spinner,
} from './style';

export const Loader = (): JSX.Element => (
  <Container>
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  </Container>
  );
