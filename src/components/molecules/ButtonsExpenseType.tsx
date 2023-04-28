import React, { useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';

type ButtonsExpenseTypeProps = {
  expenseType: string;
  getFilterType: (filterType: string) => void;
};
const ButtonsExpenseType = ({
  expenseType,
  getFilterType,
}: ButtonsExpenseTypeProps) => {
  const [type, setType] = useState(expenseType);
  return (
    <SegmentedButtons
      value={type}
      onValueChange={(value: string) => {
        setType(value);
        getFilterType(value);
      }}
      buttons={[
        {
          value: 'all',
          label: 'Tous',
          showSelectedCheck: true,
        },
        {
          value: 'vape',
          label: 'Vapotage',
          showSelectedCheck: true,
        },
        {
          value: 'cigarette',
          label: 'Cigarettes',
          showSelectedCheck: true,
        },
      ]}
    />
  );
};

export default ButtonsExpenseType;
