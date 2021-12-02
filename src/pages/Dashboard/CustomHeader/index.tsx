import React, { useCallback } from 'react';
import { Container } from './styles';
import logo from '../../../assets/images/logo.png';
import { useDebounce } from '../../../hooks/useDebounce';
import { Icon } from '../../../components/Icon';

export const CustomHeader: React.FC = () => {
  const handleOnSubmit = useCallback((data: string) => {
    console.log(data);
  }, []);

  const debouncedChange = useDebounce(handleOnSubmit, 1000);

  const handleOnSubmitWithDebounced = useCallback(
    (data: string) => {
      debouncedChange(data);
    },
    [debouncedChange],
  );

  const handleOnChange = useCallback(
    event => {
      handleOnSubmitWithDebounced(event.target.value);
    },
    [handleOnSubmitWithDebounced],
  );

  return (
    <Container>
      <section>
        <article>
          <img src={logo} alt="Teste Ímpar" height="37px" />
        </article>
      </section>
      <section>
        <article>
          <input
            onChange={handleOnChange}
            placeholder="Digite aqui sua busca..."
          />
          <span>
            <Icon color="#a4a4a4" size="50px" name="Search" />
          </span>
        </article>
      </section>
    </Container>
  );
};
