import React from 'react';
import { Text } from 'react-native-paper';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { ColorsEnum } from '../../../assets/colors/colors.enum';
import { fontPixel } from '../../../utils/font-scale.utils';

export type TextMetricProps = {
  metric: number;
  formatOptions: {
    style: 'currency' | 'decimal';
    currency?: 'EUR' | 'USD';
    maximumFractionDigits?: number;
  };
  fontSize: number;
};

const TextMetric = ({
  metric = 40.0,
  formatOptions,
  fontSize,
}: TextMetricProps) => {
  return (
    <Text
      style={{
        fontFamily: FontsEnum.BOLD,
        fontSize: fontSize,
        color: ColorsEnum.BLACK,
      }}
    >
      {new Intl.NumberFormat('fr-FR', formatOptions).format(metric)}
    </Text>
  );
};

export default TextMetric;
