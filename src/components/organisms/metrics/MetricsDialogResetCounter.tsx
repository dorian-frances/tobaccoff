import React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { ColorsEnum } from '../../../assets/colors/colors.enum';
import DialogButtons from '../../molecules/DialogButtons';

type MetricsDialogRestCounterProps = {
  showDialog: boolean;
  toggleDialog: () => void;
  dialogTitle: string;
  dialogDescription: string;
  resetCounter: () => void;
};

const MetricsDialogResetCounter = ({
  showDialog = false,
  toggleDialog,
  dialogTitle,
  dialogDescription,
  resetCounter,
}: MetricsDialogRestCounterProps) => {
  return (
    <Portal>
      <Dialog
        visible={showDialog}
        onDismiss={toggleDialog}
        style={{ backgroundColor: ColorsEnum.WHITE }}
      >
        <Dialog.Icon icon="alert" size={40} />
        <Dialog.Title style={styles.title}>{dialogTitle}</Dialog.Title>
        <Dialog.Content>
          <Text style={styles.description}>{dialogDescription}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <DialogButtons onCancel={toggleDialog} onValidate={resetCounter} />
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
  description: {
    textAlign: 'center',
    fontFamily: FontsEnum.MEDIUM,
  },
});

export default MetricsDialogResetCounter;
