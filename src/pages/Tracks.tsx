import React, { useEffect, useState } from 'react';

import { Loader } from '../components/Loader/index';
import { useTheme } from '../hooks/useTheme';
import { useTrack } from '../hooks/useTrack';
import {
  CheckIcon,
  Container,
  IconContainer,
  PackagesHistory,
  PlusIcon,
  SaveIcon,
  TrackContainer,
} from '../styles/pages/Tracks';
import { useToast } from '../utils/useToast';

export const Tracks = (): JSX.Element => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [icon, setIcon] = useState<boolean>(false);
  const {
    dataTrack,
    handleSetToList,
    loading,
    setTrackCodeList,
    trackCode,
    trackCodeList,
  } = useTrack();
  const { theme } = useTheme();

  useEffect(() => {
    const res = trackCodeList.some((item) => item === trackCode);

    if (res) setIsSaved(true);
  }, [trackCodeList, trackCode]);

  const handleSave = () => {
    setIsSaved(true);
    setTrackCodeList((prevState: string[]) => handleSetToList(prevState, trackCode));

    if (!isSaved) {
      useToast({
        message: 'Adicionado ao seus itens',
        type: 'success',
        icon: '🔖',
        background: theme.title === 'light' ? '#353230' : '#ddd',
        color: theme.title === 'light' ? '#eee' : '#222',
      });
    }
  };

  const handleAction = () => setIcon((prevState) => !prevState);

  const renderIcon = () => {
    if (!isSaved) {
      return icon ? <SaveIcon /> : <PlusIcon />;
    }

    return <CheckIcon />;
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <PackagesHistory>
          <h1>
            {trackCode}
            <IconContainer
              isSaved={isSaved}
              onClick={handleSave}
              onMouseEnter={handleAction}
              onMouseLeave={handleAction}
            >
              {renderIcon()}
            </IconContainer>
          </h1>
          <TrackContainer>{dataTrack}</TrackContainer>
        </PackagesHistory>
      )}
    </Container>
  );
};

export default Tracks;
