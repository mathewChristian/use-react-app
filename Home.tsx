import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

interface IHomePage extends RouteComponentProps {}

function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({currency, rate} : { currency: any, rate: any}) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

const HomePage: FC<IHomePage> = () => (
  <div className="App">
    <ExchangeRates />
  </div>
);

export default HomePage;
