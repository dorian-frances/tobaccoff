import { SegmentedButtons } from 'react-native-paper';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

type SegmentedButtonsTobaccoTypeProps = {
  getCigaretteType: (cigaretteType: string) => void;
};

const SegmentedButtonsTobaccoType = ({
  getCigaretteType,
}: SegmentedButtonsTobaccoTypeProps) => {
  const [value, setValue] = useState('industrielles');
  return (
    <SegmentedButtons
      value={value}
      onValueChange={(value) => {
        setValue(value);
        getCigaretteType(value);
      }}
      buttons={[
        {
          value: 'industrielles',
          label: 'Industrielles',
          showSelectedCheck: true,
        },
        {
          value: 'roulées',
          label: 'Roulées',
          showSelectedCheck: true,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SegmentedButtonsTobaccoType;
