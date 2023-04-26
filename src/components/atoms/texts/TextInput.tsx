import React, { useState } from 'react';
import { TextInput as TextInputRNP } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { ColorsEnum } from '../../../assets/colors/colors.enum';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { fontPixel, fontStyles } from '../../../utils/font-scale.utils';

type TextInputProps = {
  mode?: 'flat' | 'outlined';
  label: string;
  rightText?: string;
  getValue: (value: string) => void;
  placeholder: string;
};

const TextInput = ({
  mode = 'outlined',
  label = 'Lorem ipsum',
  rightText = '/Lorem',
  getValue,
  placeholder,
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <TextInputRNP
      mode={mode}
      label={label}
      right={<TextInputRNP.Affix text={rightText} />}
      placeholder={placeholder}
      style={styles.textInputStyle}
      onChangeText={(value: string) => {
        setInputValue(value);
        getValue(value);
      }}
      outlineStyle={{
        borderRadius: 100,
        borderColor: ColorsEnum.INPUT_STROKE_COLOR,
      }}
      keyboardType={'numeric'}
      testID={'text-input-ID'}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    fontFamily: FontsEnum.MEDIUM,
    fontSize: fontStyles.small,
    backgroundColor: ColorsEnum.WHITE,
  },
});

export default TextInput;
