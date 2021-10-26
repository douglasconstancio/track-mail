import React from 'react';

import CorreiosLogo from '../img/correios-logo.svg';
import ViacepLogo from '../img/viacep-logo.svg';
import { Container } from '../styles/pages/Integrations';

export const Integrations = (): JSX.Element => (
  <Container>
    <h1>Integrações</h1>
    <div>
      <img src={CorreiosLogo} alt="correios-logo" />
      <img src={ViacepLogo} alt="viacep-logo" />
    </div>
  </Container>
  );

export default Integrations;
