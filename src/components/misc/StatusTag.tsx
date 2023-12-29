import { Tag } from '@chakra-ui/react';
import { colors } from '../../constants/colors';

const StatusTag = ({ status }: { status: string }) => {
  let statusColor: string;

  switch (status) {
    case 'Delivered':
      statusColor = colors.delivered;
      break;
    case 'In-Transit':
      statusColor = colors.inTransit;
      break;
    case 'Manifested':
      statusColor = colors.manifested;
      break;
    default:
      statusColor = colors.unknown;
  }

  return (
    <Tag
      variant='outline'
      py='6px'
      px='14px'
      colorScheme={statusColor}
    >
      {status}
    </Tag>
  );
};

export default StatusTag;
