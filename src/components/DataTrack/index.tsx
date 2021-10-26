/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { v4 } from 'uuid';

import { UnityTrack } from '../../@types/DataProps';
import { Divider } from '../Divider';
import {
  City,
  Container,
  DateHour,
  Delivered,
  Description,
  Details,
  DividerContainer,
  Info,
  MoreInfo,
  MoreInfoContainer,
  Posted,
  State,
  Transit,
} from './style';

export const DataTrack = ({
  data, hora, descricao, unidade: { cidade, uf }, length,
}: UnityTrack): JSX.Element => {
  const [moreInfo, setMoreInfo] = useState<boolean>(false);

  return (
    <Container key={v4()}>
      <div>
        {data ? (
          <DateHour>
            <li>{`${data} às ${hora}`}</li>
          </DateHour>
      ) : (
        <DateHour>
          <li>--/--/---- --:--</li>
        </DateHour>
      )}
        {descricao === 'Objeto postado' ? (
          <Posted color="#fff" />
      ) : descricao === 'Objeto entregue ao destinatário' ? (
        <Delivered color="#fff" />
      ) : (
        <Transit color="#fff" description={descricao} />
      )}
        <Info>
          <div>
            {descricao ? (
              <Description>
                <li>{descricao}</li>
              </Description>
        ) : (
          <Description>
            <li>--</li>
          </Description>
        )}
            <Details>
              {uf ? (
                <State>
                  <li>{uf}</li>
                </State>
          ) : (
            <State>
              <li>--</li>
            </State>
          )}
              {cidade ? (
                <City>
                  <li>{` | ${cidade}`}</li>
                </City>
          ) : (
            <City>
              <li>--</li>
            </City>
          )}
            </Details>
          </div>
          <MoreInfo onClick={() => setMoreInfo((prevState) => !prevState)} name="ArrowDown" color="#fff" />
        </Info>
      </div>
      {moreInfo && (
        <MoreInfoContainer>
          <h1>Em Breve 🌟</h1>
        </MoreInfoContainer>
      )}
      <DividerContainer>
        {!length && <Divider width="100" />}
      </DividerContainer>
    </Container>
  );
};
