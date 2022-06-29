import React from 'react';
import PageWrapper from 'components/layout/page-wrapper';
import Card from '../components/cardComponent/Card';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

export default function ProductCard() {
  return (
    <PageWrapper heading='The Result' icon='menu'>
        <ApolloProvider client={client}>
          <Card/>
        </ApolloProvider>
    </PageWrapper>
  );
}
