import React, { useEffect, useState } from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { FontsEnum } from '../../assets/fonts/fonts.enum';

type DialogRestCounterProps = {
  showDialog: boolean;
  toggleDialog: () => void;
  dialogTitle: string;
  dialogDescription: string;
  resetCounter: () => void;
};

const DialogResetCounter = ({
  showDialog = false,
  toggleDialog,
  dialogTitle,
  dialogDescription,
  resetCounter,
}: DialogRestCounterProps) => {
  return (
    <Portal>
      <Dialog visible={showDialog} onDismiss={toggleDialog}>
        <Dialog.Icon icon="alert" size={40} />
        <Dialog.Title style={styles.title}>{dialogTitle}</Dialog.Title>
        <Dialog.Content>
          <Text style={styles.textInput}>{dialogDescription}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={toggleDialog}>Cancel</Button>
          <Button onPress={resetCounter}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontFamily: FontsEnum.MEDIUM,
  },
  textInput: {
    textAlign: 'center',
    fontFamily: FontsEnum.MEDIUM,
  },
});

export default DialogResetCounter;
