import React, { useCallback, useRef } from 'react';

import { Footer } from '../components/Footer';
import { useTrack } from '../hooks/useTrack';
import {
  CodeContainer,
  Input,
  Title,
  Container,
} from '../styles/pages/Homepage';

export default function Homepage(): JSX.Element {
  const valueInputRef = useRef<HTMLInputElement>(null);

  const { getTrackingData } = useTrack();

  const handleTrack = useCallback(() => {
    getTrackingData(String(valueInputRef.current?.value));
  }, [getTrackingData]);

  return (
    <>
      <Container>
        <Title>
          <h1>
            SemNome
            <span>.</span>
            !
          </h1>
        </Title>
        <CodeContainer>
          <Input
            type="text"
            ref={valueInputRef}
            maxLength={15}
            placeholder="Código"
            required
          />
          <button type="button" onClick={() => handleTrack()}>
            Rastrear
          </button>
        </CodeContainer>
      </Container>
      <Footer />
    </>
  );
}
