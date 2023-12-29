import { gql } from '../../__generated__';
import { useQuery } from '@apollo/client';
import ShipmentTable from './ShipmentsTable';
import { Box } from '@chakra-ui/react';
import AlertWithRefetch from '../AlertWithRefetch';

const GET_SHIPMENTS = gql(/* GraphQL */ `
  query Shipments {
    shipments {
      status
      id
      trackingId
      lastUpdate
      deliveredTime
      deliveryAddress
      totalTransit
    }
  }
`);

const Shipments = () => {
  const { data, error, loading, refetch } = useQuery(GET_SHIPMENTS);

  return (
    <Box padding='20px'>
      <AlertWithRefetch error={error} refetch={refetch} />
      {!loading && !error && <ShipmentTable data={data} />}
    </Box>
  );
};

export default Shipments;
