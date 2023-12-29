// import { useQuery } from '@apollo/client';
import './App.css';
// import { gql } from './__generated__';
import AppBar from './components/AppBar';
import Shipments from './components/Shipments';

// const GET_LOCATIONS = gql(/* GraphQL */ `
//   query trEvent($trackingId: String!) {
//     trackingEvents(trackingId: $trackingId) {
//       id
//       trackingId
//       statusSeverity
//       timestamp
//     }
//   }
// `);

function App() {
  // const { loading, error, data } = useQuery(GET_LOCATIONS, {
  //   variables: { trackingId: 'SHP-98765' },
  // });

  // console.log('Loading:', loading);
  // console.log('Data:', data);
  // console.log('Error:', error);

  // if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <AppBar />
      <Shipments />
    </>
  );
}

export default App;
