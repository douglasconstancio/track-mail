import React, { useState } from 'react';

import { useRoutes } from '../../../services/useRoutes';
import {
 Container, StackIcon, ListContainer, List,
} from './style';

export const NavigationMobile = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisibility = () => setIsVisible((prevState) => !prevState);

  const renderIntegrations = () => useRoutes('/integrations');

  const renderSearchCEP = () => useRoutes('/searchcep');

  return (
    <Container onClick={() => handleVisibility()}>
      <StackIcon size={32} />
      {isVisible && (
        <ListContainer>
          <List>
            <li>
              <button
                type="button"
                onClick={renderIntegrations}
                onKeyPress={renderIntegrations}
              >
                Integrações
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={renderSearchCEP}
                onKeyPress={renderSearchCEP}
              >
                Buscar CEP
              </button>
            </li>
          </List>
        </ListContainer>
      )}
    </Container>
  );
};
