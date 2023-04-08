import React from 'react';
import { Text } from 'react-native-paper';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

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
    <Text
      style={{
        fontFamily: FontsEnum.BOLD,
        fontSize: fontSize,
        color: ColorsEnum.BUSINESS_TEXT_COLOR,
      }}
    >
      {new Intl.NumberFormat('fr-FR', formatOptions).format(metric)}
    </Text>
  );
};

export default MetricText;
