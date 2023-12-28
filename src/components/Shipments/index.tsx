import React from 'react';
import { gql } from '../../__generated__';
import { useQuery } from '@apollo/client';
import ShipmentTable from './ShipmentsTable';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Text,
} from '@chakra-ui/react';

const GET_SHIPMENTS = gql(/* GraphQL */ `
  query Shipments {
    shipments {
      status
      id
      trackingId
    }
  }
`);

const Shipments = () => {
  const { data, error, loading } = useQuery(GET_SHIPMENTS);
  return (
    <Box padding='20px'>
      {error && (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Error getting data from server</AlertTitle>
          <AlertDescription>
            <Text>{error.message}</Text>
          </AlertDescription>
        </Alert>
      )}
      {!loading && !error && <ShipmentTable data={data} />}
    </Box>
  );
};

export default Shipments;
