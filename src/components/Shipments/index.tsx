import { gql } from '../../__generated__';
import { useQuery } from '@apollo/client';
import ShipmentTable from './ShipmentsTable';
import { Box } from '@chakra-ui/react';
import LoadingErrorAlertWithRefetch from '../LoadingErrorAlertWithRefetch';
import { useContext, useMemo } from 'react';
import { ShipmentSortContext } from '../../contexts/ShipemtSortContextProvider';

export interface IShipment {
  __typename?: 'Shipment';
  status: string;
  id: string;
  trackingId: string;
  lastUpdate: string;
  deliveredTime?: string | null;
  deliveryAddress: string;
  totalTransit: string;
}

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
  const { sortBy, sortDirection } = useContext(ShipmentSortContext);

  const sortedShipments = useMemo(() => {
    if (!data) return undefined;
    if (!sortBy) return [...data.shipments];
    return [...data.shipments].sort((elA, elB) =>
      elA[sortBy === 'Shipment' ? 'trackingId' : 'status'] >
      elB[sortBy === 'Shipment' ? 'trackingId' : 'status']
        ? sortDirection === 'DESC'
          ? -1
          : 1
        : sortDirection === 'DESC'
          ? 1
          : -1
    );
  }, [data, sortBy, sortDirection]);

  return (
    <Box padding='20px'>
      <LoadingErrorAlertWithRefetch error={error} refetch={refetch} />
      {!loading && !error && (
        <ShipmentTable shipments={sortedShipments} />
      )}
    </Box>
  );
};

export default Shipments;
