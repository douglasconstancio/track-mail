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
      <strong>Estado:</strong>
      <p>{fu}</p>
    </div>
    <div>
      <strong>Rua/ Avenida:</strong>
      <p>{street}</p>
    </div>
    <div>
      <strong>Complemento:</strong>
      <p>{complement || ' - '}</p>
    </div>
    <div>
      <strong>Município:</strong>
      <p>{locale}</p>
    </div>
    <div>
      <strong>Bairro:</strong>
      <p>{neighborhood}</p>
    </div>
  </Container>
  );
