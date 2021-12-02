import React from 'react';
import { Container } from './styles';
import { CustomHeader } from './CustomHeader';
import { List } from './List';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <CustomHeader />
      <List />
    </Container>
  );
};
