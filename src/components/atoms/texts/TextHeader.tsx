import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { fontStyles } from '../../../utils/font-scale.utils';

type TextHeaderProps = {
  text: string;
};

const TextHeader = ({ text = 'Lorem Ipsum' }: TextHeaderProps) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FontsEnum.BOLD,
    fontSize: fontStyles.xxTitle,
  },
});

export default TextHeader;
