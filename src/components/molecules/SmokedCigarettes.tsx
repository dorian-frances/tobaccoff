import { View } from 'react-native';
import MetricText, { MetricTextProps } from '../atoms/texts/MetricText';
import SectionText, { SectionTextProps } from '../atoms/texts/SectionText';

type NonSmokedCigarettesProps = {
  metricTextProp: MetricTextProps;
  sectionTextProp: SectionTextProps;
};

const SmokedCigarettes = ({
  metricTextProp,
  sectionTextProp,
}: NonSmokedCigarettesProps) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <MetricText {...metricTextProp} />
      <SectionText {...sectionTextProp} />
    </View>
  );
};

export default SmokedCigarettes;
