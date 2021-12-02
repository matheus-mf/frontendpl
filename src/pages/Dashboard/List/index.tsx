import React, { useCallback } from 'react';
import { Container } from './styles';
import { Card } from '../../../components/Card';
import Pagination from '../../../components/Pagination';

export const List: React.FC = () => {
  const handleOnClickNewCard = useCallback(() => {
    console.log('NewCard');
  }, []);

  const tes =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png';

  const handleEdit = useCallback((id: string) => {
    console.log(id);
  }, []);

  const handleDelete = useCallback((id: string) => {
    console.log(id);
  }, []);

  const handleOnPagination = useCallback((page: number) => {
    console.log(page);
  }, []);

  return (
    <Container>
      <header>
        <h2>Resultado de busca</h2>
        <button type="button" onClick={handleOnClickNewCard}>
          Novo Card
        </button>
      </header>
      <article>
        <Card
          id="12"
          name="teste"
          src={tes}
          description="asasd"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Card
          id="12"
          name="teste"
          src={tes}
          description="asasdasdasdmaskd kjasdkljas "
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Card
          id="12"
          name="teste"
          src={tes}
          description="asasdasdasdmaskd kjasdkljas kjasdkj asoipjaskn aojpasjo oasd"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Card
          id="12"
          name="teste"
          src={tes}
          description="asasdasdasdmaskd kjasdkljas kjasdkj asoipjaskn aojpasjo oasd"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Card
          id="12"
          name="teste"
          src={tes}
          description="asasdasdasdmaskd kjasdkljas kjasdkj asoipjaskn aojpasjo oasd"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Card
          id="12"
          name="teste"
          src={tes}
          description="asasdasdasdmaskd kjasdkljas kjasdkj asoipjaskn aojpasjo oasd"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Card
          id="12"
          name="teste"
          src={tes}
          description="asasdasdasdmaskd kjasdkljas kjasdkj asoipjaskn aojpasjo oasd"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Card
          id="12"
          name="teste"
          src={tes}
          description="asasdasdasdmaskd kjasdkljas kjasdkj asoipjaskn aojpasjo oasd"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </article>
      <div>
        <Pagination
          initialPage={1}
          totalNumberOfPages={1200}
          onChange={handleOnPagination}
        />
      </div>
    </Container>
  );
};
