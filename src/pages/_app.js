import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import AppState from '../../context/AppState';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  // https://alert-red-beaver.cyclic.app/graphql
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});


export default function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <AppState>
          <Component {...pageProps} />
        </AppState>
      </ApolloProvider>
    </ThemeProvider>
  );
}