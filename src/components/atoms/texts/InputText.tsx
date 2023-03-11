import React, { ReactNode, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

type CigaretteAmountTextInputProps = {
  mode?: 'flat' | 'outlined';
  label?: string;
  rightText?: string;
};

const InputText = ({
  mode = 'outlined',
  label = 'Lorem ipsum',
  rightText = '/Lorem',
}: CigaretteAmountTextInputProps) => {
  const [text, setText] = useState('');

  return (
    <TextInput
      mode={mode}
      label={label}
      right={<TextInput.Affix text={rightText} />}
      style={styles.textInputStyle}
      onChangeText={(newText) => setText(newText)}
      outlineStyle={{ width: '100%', borderRadius: 100 }}
      keyboardType={'numeric'}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
  },
});

export default InputText;
