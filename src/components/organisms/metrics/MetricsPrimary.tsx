import { StyleSheet, View } from 'react-native';
import MetricPrimary, {
  MetricPrimaryProps,
} from '../../molecules/MetricPrimary';
import Divider from '../../atoms/dividers/Divider';
import React from 'react';
import { heightPixel } from '../../../utils/font-scale.utils';

export type MetricsPrimaryProps = {
  totalSavingsProps: MetricPrimaryProps;
  monthlySavingsProps: MetricPrimaryProps;
};

const MetricsPrimary = ({
  totalSavingsProps,
  monthlySavingsProps,
}: MetricsPrimaryProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.totalSavingsStyle}>
        <MetricPrimary {...totalSavingsProps} />
      </View>
      <View style={styles.monthlySavingsStyle}>
        <MetricPrimary {...monthlySavingsProps} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {},
  totalSavingsStyle: {},
  monthlySavingsStyle: {
    marginTop: heightPixel(10),
  },
  dividerStyle: {
    marginTop: heightPixel(30),
  },
});

export default MetricsPrimary;
