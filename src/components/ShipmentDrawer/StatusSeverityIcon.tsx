import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';

const StatusSeverityIcon = ({
  statusSeverity,
}: {
  statusSeverity: string;
}) => {
  if (statusSeverity === 'Success')
    return <CheckCircleIcon boxSize={6} color='green' />;

  return <WarningIcon boxSize={6} color='red' />;
};

export default StatusSeverityIcon;
