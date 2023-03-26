import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { Button, Dialog, Portal } from 'react-native-paper';
import { FontsEnum } from '../../assets/fonts/fonts.enum';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import { getTheme } from 'react-native-paper/lib/typescript/core/theming';

type DialogAddCigaretteProps = {
  showDialog: boolean;
  toggleDialog: () => void;
  onValidate: (value: number) => void;
  dialogTitle: string;
  sliderText: string;
  minimumSlider: number;
  maximumSlider: number;
  stepSlider: number;
  defaultValue: number;
};

const DialogAddCigarette = ({
  showDialog,
  toggleDialog,
  onValidate,
  dialogTitle,
  sliderText,
  minimumSlider,
  maximumSlider,
  stepSlider,
  defaultValue,
}: DialogAddCigaretteProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Portal>
      <Dialog visible={showDialog} onDismiss={toggleDialog}>
        <Dialog.Icon icon="emoticon-sad-outline" size={40} />
        <Dialog.Title style={styles.title}>{dialogTitle}</Dialog.Title>
        <Dialog.Content>
          <Text style={styles.description}>{sliderText}</Text>
          <Text style={styles.cigaretteAmount}>{value}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Slider
            containerStyle={{
              width: '100%',
            }}
            value={value}
            onValueChange={(updatedValue) => setValue(updatedValue[0])}
            minimumValue={minimumSlider}
            maximumValue={maximumSlider}
            step={stepSlider}
          />
        </Dialog.Actions>
        <Dialog.Actions>
          <Button onPress={toggleDialog}>Cancel</Button>
          <Button onPress={() => onValidate(value)}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    textAlign: 'center',
    fontFamily: FontsEnum.MEDIUM,
  },
  description: {
    textAlign: 'center',
    fontFamily: FontsEnum.MEDIUM,
  },
  cigaretteAmount: {
    textAlign: 'center',
    fontFamily: FontsEnum.BOLD,
    fontSize: 20,
  },
});

export default DialogAddCigarette;
