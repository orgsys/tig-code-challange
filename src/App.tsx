import React from "react";
import logo from "./logo.svg";
import { useQuery } from "@apollo/client";
import "./App.css";
import { gql } from "./__generated__";

const GET_LOCATIONS = gql(/* GraphQL */ `
  query trEvent($trackingId: String!) {
    trackingEvents(trackingId: $trackingId) {
      id
      trackingId
      statusSeverity
      timestamp
    }
  }
`);

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { trackingId: "SHP-98765" },
  });

  console.log("Loading:", loading);
  console.log("Data:", data);
  console.log("Error:", error);

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
