import React from 'react';
import { View } from 'react-native';
import MetricText, { MetricTextProps } from '../atoms/texts/MetricText';
import SectionText, { SectionTextProps } from '../atoms/texts/SectionText';

export type SecondaryMetricProps = {
  metricTextProps: MetricTextProps;
  sectionTextProps: SectionTextProps;
};

const SecondaryMetric = ({
  metricTextProps,
  sectionTextProps,
}: SecondaryMetricProps) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <MetricText {...metricTextProps} />
      <SectionText {...sectionTextProps} />
    </View>
  );
};

export default SecondaryMetric;
