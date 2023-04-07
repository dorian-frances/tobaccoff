import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';

export type InfoTextProps = {
  text: string;
};

const InfoText = ({ text = 'Lorem Ipsum' }: InfoTextProps) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: FontsEnum.MEDIUM,
    fontSize: 10,
  },
});

export default InfoText;
