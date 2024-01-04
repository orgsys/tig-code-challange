import { useQuery } from '@apollo/client';
import ShipmentTable from './ShipmentsTable';
import { Box } from '@chakra-ui/react';
import LoadingErrorAlertWithRefetch from '../LoadingErrorAlertWithRefetch';
import { useContext, useMemo, useState } from 'react';
import { ShipmentSortContext } from '../../contexts/ShipemtSortContextProvider';
import { GET_SHIPMENTS, IShipment } from '../../api/shipments';
import ShipmentDrawer from '../ShipmentDrawer';

const Shipments = () => {
  const { data, error, loading, refetch } = useQuery(GET_SHIPMENTS);
  const { sortBy, sortDirection } = useContext(ShipmentSortContext);
  const [selectedShipment, setSelectedShipment] =
    useState<IShipment>();

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

  const handleClose = () => {
    setSelectedShipment(undefined);
  };

  return (
    <>
      <Box padding='20px'>
        <LoadingErrorAlertWithRefetch
          error={error}
          refetch={refetch}
        />
        {!loading && !error && (
          <ShipmentTable
            shipments={sortedShipments}
            setSelectedShipment={setSelectedShipment}
          />
        )}
      </Box>
      <ShipmentDrawer
        onClose={handleClose}
        selectedShipment={selectedShipment}
      />
    </>
  );
};

export default Shipments;
