import { StyleSheet, View } from 'react-native';
import SectionText from '../atoms/texts/SectionText';
import MetricText from '../atoms/texts/MetricText';

type TotalSavingsProps = {};

const TotalSavings = ({}: TotalSavingsProps) => {
  return (
    <View style={styles.container}>
      <SectionText text={'Economies totales'} fontSize={22} />
      <MetricText
        metric={43.5}
        unit={'€'}
        minimumFractionDigits={2}
        fontSize={50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
export default TotalSavings;
