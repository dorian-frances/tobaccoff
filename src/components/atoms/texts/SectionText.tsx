import { StyleSheet, Text } from 'react-native';
import React from 'react';

type SectionTextProps = {
  text?: string;
};

const SectionText = ({ text = 'Section text example' }: SectionTextProps) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 22,
  },
});

export default SectionText;
