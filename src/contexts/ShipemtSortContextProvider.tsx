import { createContext, useState } from 'react';

export const ShipmentSortContext = createContext<{
  selectSortBy: (field: undefined | 'Shipment' | 'Status') => void;
  sortDirection: undefined | 'ASC' | 'DESC';
  sortBy: undefined | 'Shipment' | 'Status';
}>({
  sortDirection: undefined,
  sortBy: undefined,
  selectSortBy: () => null,
});

const ShipmentSortConextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sortDirection, setSortDirection] = useState<
    'ASC' | 'DESC'
  >();
  const [sortBy, setSortBy] = useState<'Shipment' | 'Status'>();

  const selectSortBy = (field: undefined | 'Shipment' | 'Status') => {
    setSortBy((previouseSortBy) => {
      if (!previouseSortBy) setSortDirection('ASC');
      if (previouseSortBy === field)
        setSortDirection((currentDirection) =>
          currentDirection === 'DESC' ? 'ASC' : 'DESC'
        );
      return field;
    });
  };

  return (
    <ShipmentSortContext.Provider
      value={{ sortDirection, selectSortBy, sortBy }}
    >
      {children}
    </ShipmentSortContext.Provider>
  );
};

export default ShipmentSortConextProvider;
