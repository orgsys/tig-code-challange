import { ArrowUpDownIcon } from '@chakra-ui/icons';
import { IconButton, Stack, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ShipmentSortContext } from '../../contexts/ShipemtSortContextProvider';

const TableHeadLabelSortButton = ({
  label,
  sortAreaLabel,
}: {
  label: string;
  sortAreaLabel: string;
}) => {
  const { selectSortBy } = useContext(ShipmentSortContext);

  const handleSelectSortBy = () => {
    if (label === 'Shipment' || label === 'Status') {
      selectSortBy(label);
    }
  };

  return (
    <Stack direction='row' alignItems='center'>
      <Text>{label}</Text>
      <IconButton
        size='xxs'
        p='0px'
        m='0px'
        width='10px'
        variant='link'
        data-cy={sortAreaLabel}
        aria-label={sortAreaLabel}
        icon={<ArrowUpDownIcon fontSize='xx-small' />}
        onClick={handleSelectSortBy}
      />
    </Stack>
  );
};

export default TableHeadLabelSortButton;
