import React from 'react';
import { Text } from 'react-native-paper';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';

export type MetricTextProps = {
  metric: number;
  formatOptions: {
    style: 'currency' | 'decimal';
    currency?: 'EUR' | 'USD';
    maximumFractionDigits?: number;
  };
  fontSize: number;
};

const MetricText = ({
  metric = 40.0,
  formatOptions,
  fontSize = 40,
}: MetricTextProps) => {
  return (
    <Text style={{ fontFamily: FontsEnum.BOLD, fontSize: fontSize }}>
      {new Intl.NumberFormat('fr-FR', formatOptions).format(metric)}
    </Text>
  );
};

export default MetricText;
