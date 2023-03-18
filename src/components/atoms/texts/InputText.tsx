import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/colors.enum';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';

type CigaretteAmountTextInputProps = {
  mode?: 'flat' | 'outlined';
  label?: string;
  rightText?: string;
  getCigaretteAmount: (cigaretteAmount: string) => void;
};

const InputText = ({
  mode = 'outlined',
  label = 'Lorem ipsum',
  rightText = '/Lorem',
  getCigaretteAmount,
}: CigaretteAmountTextInputProps) => {
  const [cigaretteAmount, setCigaretteAmount] = useState('');

  return (
    <TextInput
      mode={mode}
      label={label}
      right={<TextInput.Affix text={rightText} />}
      style={styles.textInputStyle}
      onChangeText={(cigaretteAmount) => setCigaretteAmount(cigaretteAmount)}
      outlineStyle={{
        width: '100%',
        borderRadius: 100,
        borderColor: Colors.INPUT_STROKE_COLOR,
      }}
      keyboardType={'numeric'}
      onEndEditing={() => getCigaretteAmount(cigaretteAmount)}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    fontFamily: FontsEnum.MEDIUM,
    fontSize: 15,
  },
});

export default InputText;