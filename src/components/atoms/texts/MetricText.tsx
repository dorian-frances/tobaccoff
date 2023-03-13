import { Text } from 'react-native-paper';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';

export type MetricTextProps = {
  metric: number;
  unit: string;
  minimumFractionDigits: number;
  fontSize: number;
};

const MetricText = ({
  metric = 40.0,
  unit = '€',
  minimumFractionDigits = 2,
  fontSize = 40,
}: MetricTextProps) => {
  return (
    <Text style={{ fontFamily: FontsEnum.BOLD, fontSize: fontSize }}>
      {metric.toLocaleString('fr-FR', {
        minimumFractionDigits: minimumFractionDigits,
      })}
      {unit}
    </Text>
  );
};

export default MetricText;
