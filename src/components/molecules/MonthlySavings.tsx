import { StyleSheet, View } from 'react-native';
import MetricText from '../atoms/texts/MetricText';
import SectionText from '../atoms/texts/SectionText';

type MonthlySavingsProps = {};

const MonthlySavings = ({}: MonthlySavingsProps) => {
  return (
    <View style={styles.container}>
      <SectionText text={'Ce mois-ci'} fontSize={18} />
      <MetricText
        metric={6}
        unit={'€'}
        minimumFractionDigits={2}
        fontSize={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default MonthlySavings;
