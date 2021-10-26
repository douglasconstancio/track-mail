/* eslint-disable no-nested-ternary */
import React, { FormEvent, useState } from 'react';

import { DataCEPProps } from '../@types/DataCEPProps';
import { DataCEP } from '../components/DataCEP';
import { CEPInput } from '../components/Input';
import { Loader } from '../components/Loader';
import { useTheme } from '../hooks/useTheme';
import { cepAPI } from '../services/api';
import { Container, Title, CEPContainer } from '../styles/pages/SearchCEP';
import { useToast } from '../utils/useToast';

type DataProps = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  localidade: string;
  logradouro: string;
  uf: string;
  erro?: boolean;
};

export const SearchCEP = (): JSX.Element => {
  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [CEPData, setCEPData] = useState<DataCEPProps | null>(null);
  const [CEPCode, setCEPCode] = useState<string>('');

  const handleSearchCEP = async (cep: string) => {
    if (CEPCode.length !== 8) {
      useToast({
        message: 'Preencha o campo corretamente! 👀',
        type: 'error',
        background: theme.title === 'light' ? '#353230' : '#ddd',
        color: theme.title === 'light' ? '#eee' : '#222',
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await cepAPI.get<DataProps>(`${cep}/json/`);

      if (data.erro) {
        useToast({
          message: 'CEP inválido',
          type: 'error',
          background: theme.title === 'light' ? '#353230' : '#ddd',
          color: theme.title === 'light' ? '#eee' : '#222',
        });
        setIsLoading(false);

        return;
      }

      setCEPData({
        cep: data.cep,
        neighborhood: data.bairro,
        complement: data.complemento,
        street: data.logradouro,
        locale: data.localidade,
        fu: data.uf,
      });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {!CEPData && !isLoading ? (
        <>
          <Title>
            <h1>
              Search
              <span>CEP</span>
            </h1>
          </Title>
          <CEPContainer>
            <CEPInput
              value={CEPCode}
              onChange={(event: FormEvent<HTMLInputElement>) => setCEPCode(event.target.value)}
              required
            />
            <button type="button" onClick={() => handleSearchCEP(CEPCode)}>
              Search
            </button>
          </CEPContainer>
        </>
      ) : !CEPData && isLoading ? (
        <Loader />
      ) : (
        <DataCEP
          cep={CEPData?.cep}
          fu={CEPData?.fu}
          street={CEPData?.street}
          complement={CEPData?.complement}
          locale={CEPData?.locale}
          neighborhood={CEPData?.neighborhood}
        />
      )}
    </Container>
  );
};

export default SearchCEP;
