import { Text, StyleSheet } from 'react-native';
import React from 'react';

type TextHeaderProps = {
  text: string;
};

const HeaderText = ({ text = 'Lorem Ipsum' }: TextHeaderProps) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 40,
  },
});

export default HeaderText;
