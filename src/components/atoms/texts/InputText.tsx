import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { ColorsEnum } from '../../../assets/colors/colors.enum';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';

type CigaretteAmountTextInputProps = {
  mode?: 'flat' | 'outlined';
  label: string;
  rightText?: string;
  getValue: (value: string) => void;
  placeholder: string;
};

const InputText = ({
  mode = 'outlined',
  label = 'Lorem ipsum',
  rightText = '/Lorem',
  getValue,
  placeholder,
}: CigaretteAmountTextInputProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <TextInput
      mode={mode}
      label={label}
      right={<TextInput.Affix text={rightText} />}
      placeholder={placeholder}
      style={styles.textInputStyle}
      onChangeText={(value) => {
        setInputValue(value);
        getValue(value);
      }}
      outlineStyle={{
        width: '100%',
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
    fontSize: 15,
    backgroundColor: ColorsEnum.INPUT_BACKGROUND_COLOR,
  },
});

export default InputText;
