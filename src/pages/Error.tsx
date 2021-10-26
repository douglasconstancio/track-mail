import React from 'react';

import { useTrack } from '../hooks/useTrack';
import {
  Container,
  Details,
  Info,
  Loading,
  Point,
  PointContainer,
} from '../styles/pages/Error';

export const Error = (): JSX.Element => {
  const { dataTrack } = useTrack();

  return (
    <Container>
      <Details>
        <h1>
          <span>Ops..! </span>
          Algo de errado aconteceu 😞
        </h1>
        <p>{dataTrack}</p>
      </Details>
      <Info>
        <p>Nós redirecionamos você para a página principal, não se preocupe</p>
        <Loading>
          <PointContainer>
            <Point position="first" />
            <Point position="second" />
            <Point position="third" />
          </PointContainer>
        </Loading>
      </Info>
    </Container>
  );
};

export default Error;
