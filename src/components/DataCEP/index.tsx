import React from 'react';

import { DataCEPProps } from '../../@types/DataCEPProps';
import { Container } from './style';

export const DataCEP = ({
  cep,
  complement,
  fu,
  locale,
  neighborhood,
  street,
}: DataCEPProps): JSX.Element => (
  <Container>
    <div>
      <strong>CEP:</strong>
      <p>{cep}</p>
    </div>
    <div>
      <strong>UF:</strong>
      <p>{fu}</p>
    </div>
    <div>
      <strong>STREET/AVENUE:</strong>
      <p>{street}</p>
    </div>
    <div>
      <strong>COMPLEMENT:</strong>
      <p>{complement || '" "'}</p>
    </div>
    <div>
      <strong>LOCALE:</strong>
      <p>{locale}</p>
    </div>
    <div>
      <strong>NEIGHBORHOOD:</strong>
      <p>{neighborhood}</p>
    </div>
  </Container>
  );
