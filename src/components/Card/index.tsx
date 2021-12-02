import React, { useCallback } from 'react';
import { ActionButton, Container, Content, Footer } from './styles';
import { Icon } from '../Icon';

interface ICard {
  id: string;
  name: string;
  src: string;
  description: string;
  handleEdit(id: string): void;
  handleDelete(id: string): void;
}

export const Card: React.FC<ICard> = ({
  id,
  src,
  name,
  handleDelete,
  handleEdit,
  description,
}) => {
  const handleOnClickDelete = useCallback(() => {
    handleDelete(id);
  }, [id, handleDelete]);

  const handleOnClickEdit = useCallback(() => {
    handleEdit(id);
  }, [id, handleEdit]);

  return (
    <Container>
      <Content>
        <div>
          <img src={src} alt={name} />
        </div>
        <hr />
        <p>{description}</p>
      </Content>
      <Footer>
        <ActionButton
          onClick={handleOnClickDelete}
          type="button"
          colorHover="#db2525"
        >
          <Icon color="#db2525" size="14px" name="Trash" />
          <span>Excluir</span>
        </ActionButton>
        <ActionButton
          onSubmit={handleOnClickEdit}
          type="button"
          colorHover="#e76316"
        >
          <Icon color="#e76316" size="14px" name="Pencil" />
          <span>Editar</span>
        </ActionButton>
      </Footer>
    </Container>
  );
};
