import React from "react";
import { gql } from "../../__generated__";
import { useQuery } from "@apollo/client";
import ShipmentTable from "./ShipmentsTable";
import { Box } from "@chakra-ui/react";

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
  const { data } = useQuery(GET_SHIPMENTS);
  return (
    <Box padding='20px'>
      <ShipmentTable data={data} />
    </Box>
  );
};

export default Shipments;
