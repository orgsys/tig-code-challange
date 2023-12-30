import { Td, Tr } from '@chakra-ui/react';

const shipmentLabelStyle = {
  width: '180px',
  verticalAlign: 'top',
  color: 'gray',
  fontWeight: '400',
  fontSize: 'small',
  padding: '0px',
  paddingBottom: '16px',
};

const shipmentValueStyle = {
  fontWeight: '500',
  fontSize: 'small',
  padding: '0px',
  paddingBottom: '16px',
};

interface ShipmentDetailsTableRowProps {
  label: string;
  value: string | React.ReactNode;
  singleLine?: boolean;
}

const ShipmentDetailsTableRow = ({
  label,
  value,
  singleLine = false,
}: ShipmentDetailsTableRowProps) => {
  return (
    <Tr>
      <Td
        style={{
          ...shipmentLabelStyle,
          verticalAlign: singleLine? 'center' : 'inherit',
        }}
      >
        {label}
      </Td>
      <Td style={shipmentValueStyle}>{value}</Td>
    </Tr>
  );
};

export default ShipmentDetailsTableRow;
