import React, { useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';

export type ButtonsTobaccoTypeProps = {
  defaultValue: string;
  getCigaretteType: (cigaretteType: string) => void;
};

const ButtonsTobaccoType = ({
  defaultValue,
  getCigaretteType,
}: ButtonsTobaccoTypeProps) => {
  const [cigaretteType, setCigaretteType] = useState(defaultValue);
  return (
    <SegmentedButtons
      value={cigaretteType}
      onValueChange={(value: string) => {
        setCigaretteType(value);
        getCigaretteType(value);
      }}
      buttons={[
        {
          value: 'industrial',
          label: 'Industrielles',
          showSelectedCheck: true,
          testID: 'industrialTypeButton',
        },
        {
          value: 'rolled',
          label: 'Roulées',
          showSelectedCheck: true,
          testID: 'rolledTypeButton',
        },
      ]}
    />
  );
};

export default ButtonsTobaccoType;
