import React, { useCallback, useRef } from 'react';

import { Footer } from '../components/Footer';
import { useTheme } from '../hooks/useTheme';
import { useTrack } from '../hooks/useTrack';
import HeyYouDark from '../img/heyYouDark.svg';
import HeyYouLight from '../img/heyYouLight.svg';
import {
  CodeContainer,
  Input,
  Title,
  Container,
} from '../styles/pages/Homepage';

export default function Homepage(): JSX.Element {
  const { theme: { title } } = useTheme();
  const valueInputRef = useRef<HTMLInputElement>(null);

  const { getTrackingData } = useTrack();

  const handleTrack = useCallback(() => {
    getTrackingData(String(valueInputRef.current?.value));
  }, [getTrackingData]);

  return (
    <>
      <Container>
        <Title>
          {title === 'light' ? (
            <img src={HeyYouLight} height="100px" alt="Hey-you" />
          ) : (
            <img src={HeyYouDark} height="100px" alt="Hey-you" />
          )}
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
