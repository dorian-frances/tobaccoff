import { StyleSheet, View } from 'react-native';
import TotalSavings from '../molecules/TotalSavings';
import MonthlySavings from '../molecules/MonthlySavings';
import Divider from '../atoms/dividers/Divider';
import React from 'react';

type SavingsProps = {};

const SavingsMetrics = ({}: SavingsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.totalSavingsStyle}>
        <TotalSavings />
      </View>
      <View style={styles.monthlySavingsStyle}>
        <MonthlySavings />
      </View>
      <View style={styles.dividerStyle}>
        <Divider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  totalSavingsStyle: {},
  monthlySavingsStyle: {
    marginTop: 10,
  },
  dividerStyle: {
    marginTop: 30,
  },
});

export default SavingsMetrics;
