import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { fontStyles } from '../../../utils/font-scale.utils';

export type TextInfoProps = {
  text: string;
};

const TextInfo = ({ text = 'Lorem Ipsum' }: TextInfoProps) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: FontsEnum.MEDIUM,
    fontSize: fontStyles.mini,
  },
});

export default TextInfo;
