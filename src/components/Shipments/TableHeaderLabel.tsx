import { ArrowUpDownIcon } from '@chakra-ui/icons';
import { IconButton, Stack, Text } from '@chakra-ui/react';

const TableHeadLabelSortButton = ({
  label,
  sortAreaLabel,
}: {
  label: string;
  sortAreaLabel: string;
}) => {
  return (
    <Stack direction='row' alignItems='center'>
      <Text>{label}</Text>
      <IconButton
        size='xxs'
        p='0px'
        m='0px'
        width='10px'
        variant='link'
        aria-label={sortAreaLabel}
        icon={<ArrowUpDownIcon fontSize='xx-small' />}
      />
    </Stack>
  );
};

export default TableHeadLabelSortButton;
