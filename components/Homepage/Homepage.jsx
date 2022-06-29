import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GlobalStyle, Container } from '../Layout/global-style';
import MainHero from '../MainHero/MainHero';
import Card from '../Card/Card';

import 'cross-fetch/polyfill';

const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql',
  cache: new InMemoryCache(),
});

const Homepage = (props) => {
  return (
    <ApolloProvider client={client}>
      <Container>
        <React.Fragment>
          <GlobalStyle />
          <MainHero />
          <Card />
        </React.Fragment>
      </Container>
    </ApolloProvider>
  );
};

export default Homepage;
