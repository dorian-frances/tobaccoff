import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';
import { FontsEnum } from '../../assets/fonts/fonts.enum';
import { ColorsEnum } from '../../assets/colors/colors.enum';

type DialogAddVapeExpenseProps = {
  dialogTitle: string;
  toggleDialog: () => void;
  onValidate: (value: string) => void;
  showDialog: boolean;
};

const DialogAddVapeExpense = ({
  dialogTitle,
  toggleDialog,
  onValidate,
  showDialog,
}: DialogAddVapeExpenseProps) => {
  const [text, setText] = useState('');

  const replaceDotWithComa = (text: string) => {
    return text.replace(/\./g, ',');
  };

  return (
    <Portal>
      <Dialog visible={showDialog} onDismiss={toggleDialog}>
        <Dialog.Title style={styles.title}>{dialogTitle}</Dialog.Title>
        <Dialog.Content style={styles.container}>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={(text) => setText(replaceDotWithComa(text))}
            keyboardType={'numeric'}
            outlineStyle={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
            }}
            contentStyle={{
              height: 100,
            }}
            underlineColor={'transparent'}
            caretHidden={false}
            mode={'outlined'}
            autoFocus={true}
          />
          <Text style={styles.currencyText}>€</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              toggleDialog();
              setText('');
            }}
          >
            Cancel
          </Button>
          <Button
            onPress={() => {
              setText('');
              onValidate(text);
            }}
          >
            OK
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: FontsEnum.SEMI_BOLD,
    fontSize: 30,
  },
  textInput: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  currencyText: {
    fontSize: 30,
    fontFamily: FontsEnum.BOLD,
    marginTop: 20,
    color: ColorsEnum.BUSINESS_TEXT_COLOR,
  },
});

export default DialogAddVapeExpense;
